import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ImdbSearch from './imdb/ImdbSearch'
import { setTheme } from './store/theme/themeSlice'

const App = () => {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <div id="app">
      <div>
        <input
          onChange={(e) => dispatch(setTheme(e.target.id))}
          id="dark"
          type="radio"
          name="theme-switch"
          defaultChecked={theme === 'dark'}
        />
        <label htmlFor="dark">Dark</label>
      </div>
      <div>
        <input
          onChange={(e) => dispatch(setTheme(e.target.id))}
          id="light"
          type="radio"
          name="theme-switch"
          defaultChecked={theme === 'light'}
        />
        <label htmlFor="light">Light</label>
      </div>
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
}

export default App
