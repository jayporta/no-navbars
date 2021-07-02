import { Link } from 'react-router-dom'
import nytBestSellersLogo from 'app/_images/nyt_best_seller.png'

export default () => (
  <nav>
    <div className="nav-link nav-link--nyt">
      <Link to="/nyt_best_sellers">
        <img src={nytBestSellersLogo} alt="New York Times Best Sellers logo" />
      </Link>
    </div>
    <div className="nav-link nav-link--foo" />
    <div className="nav-link nav-link--bar" />
    <div className="nav-link nav-link--zam" />
  </nav>
)
