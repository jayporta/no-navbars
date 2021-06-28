import PropTypes from 'prop-types'
import storeIconForName from './libraries/storeIconForName'
import { Tooltip } from 'app/dumb_components'
import './nytBestSellersBuyLinks.scss'

const NytBestSellersBuyLinks = ({ buyLinks } = { buyLinks: [] }) => (
  <div className="nyt-best-sellers-buy-links">
    {
     buyLinks.map(({ name, url }, i) => (
       <div className="nyt-best-sellers-buy-links__icon" key={i}>
         <a
           href={url}
           target="_blank"
           rel="noreferrer"
         >
           <img src={storeIconForName(name)} alt={`Logo for ${name}`} />
         </a>
         <Tooltip text={name} />
       </div>
     ))
    }
  </div>
)

NytBestSellersBuyLinks.propTypes = {
  buyLinks: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string })
  ).isRequired
}

export default NytBestSellersBuyLinks
