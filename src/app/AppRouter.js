import {
  Switch,
  Route
} from 'react-router-dom'
import NavThatIsNotANavBar from './dumb_components/NavThatIsNotANavBar'
import NytBestSellers from 'app/nyt/NytBestSellers'

export default () => (
  <Switch>
    <Route path="/nyt_best_sellers">
      <NytBestSellers />
    </Route>
    <Route path="/">
      <NavThatIsNotANavBar />
    </Route>
  </Switch>
)
