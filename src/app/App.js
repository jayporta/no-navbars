import { CurrentDate } from 'app/dumb_components'
import AppThemeSwitcher from 'app/AppThemeSwitcher'
import AppRouter from 'app/AppRouter'
import 'app/app.scss'

const App = () => (
  <div id="app" className="app">
    <div className="app__header">
      <AppThemeSwitcher />
      <CurrentDate />
    </div>
    <AppRouter />
  </div>
)

export default App
