import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NytBestSellers from './nyt/NytBestSellers'
import AppThemeSwitcher from './AppThemeSwitcher'
import './app.scss'

const App = () => (
  <div id="app">
    <AppThemeSwitcher />
    <Router>
      <Link to="/imdb_search">IMDB Search</Link>
      <Switch>
        <Route path="/imdb_search">
          <NytBestSellers />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
