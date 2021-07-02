import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import AppNavThatIsNotANavBar from './AppNavThatIsNotANavBar'
import NytBestSellers from 'app/nyt/NytBestSellers'

export default () => (
  <Router>
    <Switch>
      <Route path="/nyt_best_sellers">
        <NytBestSellers />
      </Route>
      <Route path="/">
        <AppNavThatIsNotANavBar />
      </Route>
    </Switch>
  </Router>
)
