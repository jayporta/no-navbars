// Since the fields provided by the API are underscore...
/* eslint-disable camelcase */
import dayjs from 'dayjs'
import { PageWrapper } from 'app/dumb_components'
import { useGetTimesBestSellersQuery } from 'app/_services/timesBestSellersApiService'
import NytBestSellersBuyLinks from './NytBestSellersBuyLinks'
import './nytBestSellers.scss'

const NytBestSellers = () => {
  const { data, error, isLoading } = useGetTimesBestSellersQuery()

  return (
    <PageWrapper
      className="nyt-best-sellers"
      error={error}
      isLoading={isLoading}
    >
      <h1>New York Times Best Sellers List</h1>
      <h3>{data?.results?.display_name}</h3>
      <h6>Published Date: {dayjs(data?.results?.published_date).format('dddd MMMM D, YYYY')}</h6>
      <ul className="nyt-best-sellers__list">
        {
          data?.results?.books.map(({
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
    </PageWrapper>
  )
}

export default NytBestSellers
