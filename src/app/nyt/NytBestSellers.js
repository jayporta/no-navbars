// Since the fields provided by the API are underscore...
/* eslint-disable camelcase */
import dayjs from 'dayjs'
import { ErrorScreen, Loader } from 'app/dumb_components'
import { useGetTimesBestSellersQuery } from 'app/_services/timesBestSellersApiService'
import NytBestSellersBuyLinks from './NytBestSellersBuyLinks'
import './nytBestSellers.scss'

const NytBestSellers = () => {
  const { data, error, isLoading } = useGetTimesBestSellersQuery()
  if (isLoading) return <Loader />
  if (error) return <ErrorScreen errorObject={error} />
  if (!data?.results?.books) {
    return (
      <ErrorScreen errorObject={Error({ name: 'Error', code: '1', message: 'API reached but is missing data.' })} />
    )
  }

  const {
    results: {
      books,
      published_date,
      display_name
    } = {}
  } = data

  return (
    <div className="nyt-best-sellers">
      <h1>New York Times Best Sellers List</h1>
      <h3>{display_name}</h3>
      <h6>Published Date: {dayjs(published_date).format('dddd MMMM D, YYYY')}</h6>
      <ul className="nyt-best-sellers__list">
        {
          books.map(({
            book_image,
            rank,
            title,
            author,
            buy_links,
            description,
            publisher
          }, i) => (
            <li className="nyt-best-sellers__list__item" key={i}>
              <div className="nyt-best-sellers__list__item__cover">
                <img
                  src={book_image}
                  alt={`Cover for ${title}`}
                />
              </div>
              <div className="nyt-best-sellers__list__item__info">
                <figcaption>
                  <div className="nyt-best-sellers__list__item__info--medium">
                    No. {rank}
                  </div>
                  <div className="nyt-best-sellers__list__item__info--large">
                    {title}
                  </div>
                  <div className="nyt-best-sellers__list__item__info--small">
                    by {author}
                  </div>
                  <div className="nyt-best-sellers__list__item__info--small">
                    {publisher}
                  </div>
                </figcaption>
                <p className="nyt-best-sellers__list__item__info--medium">
                  {description}
                </p>
                <NytBestSellersBuyLinks buyLinks={buy_links} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default NytBestSellers
