import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import ImdbSearch from './imdb/ImdbSearch'
import AppThemeSwitcher from './AppThemeSwitcher'
import './app.css'

const App = () => (
  <div id="app">
    <AppThemeSwitcher />
    <Router>
      <Link to="/imdb_search">IMDB Search</Link>
      <Switch>
        <Route path="/imdb_search">
          <ImdbSearch />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
