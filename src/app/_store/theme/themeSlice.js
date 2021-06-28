import { createSlice } from '@reduxjs/toolkit'
import themeCookie from 'app/_store/theme/themeCookie'

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'

const setCssVariables = (theme) => {
  const setDark = theme === 'dark'
  const background = setDark ? '#000' : '#fff'
  const foreground = setDark ? '#fff' : '#292929'
  const foregroundLight = setDark ? '#eceaea' : '#d1d1d1'
  const linkColor = setDark ? '#3581ff' : '#1a0dab'

  document.documentElement.style.setProperty('--background', background)
  document.documentElement.style.setProperty('--foreground', foreground)
  document.documentElement.style.setProperty('--foreground-light', foregroundLight)
  document.documentElement.style.setProperty('--link', linkColor)
}

const determineDefaultTheme = () => {
  let theme = 'light'
  if (themeCookie.get() === 'light') theme = 'light'
  else if (themeCookie.get() === 'dark') theme = 'dark'
  else theme = getSystemTheme()
  setCssVariables(theme)
  return theme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: determineDefaultTheme(),
    useSystemTheme: themeCookie.get() === null
  },
  reducers: {
    toggleUseSystemTheme: (state) => {
      if (state.useSystemTheme) {
        state.useSystemTheme = false
        themeCookie.set(state.theme)
      } else {
        const systemTheme = getSystemTheme()
        state.useSystemTheme = true
        themeCookie.delete()
        state.theme = systemTheme
        setCssVariables(systemTheme)
      }
    },
    toggleTheme: (state) => {
      const setDark = state.theme === 'light'
      const theme = setDark ? 'dark' : 'light'
      setCssVariables(theme)
      state.theme = theme
      if (!state.useSystemTheme) themeCookie.set(theme)
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleTheme, toggleUseSystemTheme } = themeSlice.actions
export const selectTheme = (state) => state.theme.theme
export const selectUseSystemTheme = (state) => state.theme.useSystemTheme
export default themeSlice.reducer
