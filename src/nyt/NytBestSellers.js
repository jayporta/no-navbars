/* eslint-disable camelcase */
import dayjs from 'dayjs'
import { insertComma } from '../_libraries'
import { ErrorScreen, Loader, ContentGrid } from '../dumb_components'
import { useGetTimesBestSellersQuery } from '../_services/timesBestSellersApiService'
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
      <ContentGrid
        items={(
          books.map(({
            book_image,
            rank,
            title,
            author,
            buy_links,
            isbns
          }, i) => (
            <div className="nyt-best-sellers__item" key={i}>
              <img
                className="nyt-best-sellers__item__cover"
                src={book_image}
                alt={`Cover for ${title}`}
              />
              <div className="nyt-best-sellers__item__info">
                <figcaption>
                  No. {rank}
                  <br />
                  <span className="nyt-best-sellers__item__info--large">
                    {title}
                  </span>
                  <br />
                  <span className="nyt-best-sellers__item__info--small">
                    by {author}
                  </span>
                </figcaption>
                <div className="nyt-best-sellers__item__info__isbns">
                  {
                  isbns.map(({ isbn10, isbn13 }, i) => (
                    <div key={i}>
                      <span>ISBN-10: {isbn10}</span>
                      {insertComma(isbns, i)}
                      <span>ISBN-13: {isbn13}</span>
                    </div>
                  ))
                }
                </div>
                <div className="nyt-best-sellers__item__info__buy-links">
                  {
                  buy_links.map(({ name, url }, i) => (
                    <a
                      key={i}
                      className=""
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {name}
                      {insertComma(buy_links, i)}
                    </a>
                  ))
                }
                </div>
              </div>
            </div>
          ))
        )}
      />
    </div>
  )
}

export default NytBestSellers
