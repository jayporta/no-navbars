import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme, toggleUseSystemTheme } from 'app/_store/theme/themeSlice'
import sun from 'app/_images/sun.png'
import moon from 'app/_images/moon.png'
import { Toggle } from 'app/dumb_components'
import './appThemeSwitcher.scss'

const AppThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.theme)
  const useSystemTheme = useSelector((state) => state.theme.useSystemTheme)
  const dispatch = useDispatch()

  return (
    <div className="app-theme-switcher">
      <Toggle
        name="theme-switch"
        checked={theme === 'dark'}
        onToggle={() => dispatch(toggleTheme())}
        offIndicator={<img src={sun} alt="sun" />}
        onIndicator={<img src={moon} alt="moon" />}
      />
      <div className="app-theme-switcher__override">
        <input
          id="theme-override"
          data-testid="useSystemThemeCheckbox"
          type="checkbox"
          role="checkbox"
          checked={useSystemTheme}
          onChange={() => dispatch(toggleUseSystemTheme())}
        />
        <label htmlFor="theme-override">Use system theme</label>
      </div>
    </div>
  )
}

export default AppThemeSwitcher
