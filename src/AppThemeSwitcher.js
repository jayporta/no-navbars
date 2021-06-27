import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from './_store/theme/themeSlice'
import sun from './_images/sun.png'
import moon from './_images/moon.png'
import { Toggle } from './dumb_components'
import './appThemeSwitcher.css'

const AppThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <div className="app-theme-switcher">
      <Toggle
        name="theme-switch"
        checked={theme === 'dark'}
        onToggle={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
        offIndicator={<img src={sun} alt="sun" />}
        onIndicator={<img src={moon} alt="moon" />}
      />
    </div>
  )
}

export default AppThemeSwitcher
