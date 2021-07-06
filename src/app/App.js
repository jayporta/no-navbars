import { BrowserRouter as Router } from 'react-router-dom'
import { CurrentDate, HomeButton } from 'app/dumb_components'
import AppThemeSwitcher from 'app/AppThemeSwitcher'
import AppRouter from 'app/AppRouter'
import 'app/app.scss'

const App = () => (
  <Router>
    <div id="app" className="app">
      <div className="app__header">
        <div className="app__header__left">
          <HomeButton />
          <AppThemeSwitcher />
        </div>
        <CurrentDate />
      </div>
      <AppRouter />
    </div>
  </Router>
)

export default App
