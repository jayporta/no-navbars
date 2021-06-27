import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NytBestSellers from 'app/nyt/NytBestSellers'
import AppThemeSwitcher from 'app/AppThemeSwitcher'
import nytBestSellersLogo from 'app/_images/nyt_best_seller.png'
import 'app/app.scss'

const App = () => (
  <div id="app" className="app">
    <div className="app__themeswitcher">
      <AppThemeSwitcher />
    </div>
    <Router>
      <Switch>
        <Route path="/nyt_best_sellers">
          <div className="app__padded">
            <NytBestSellers />
          </div>
        </Route>
        <Route path="/">
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
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
