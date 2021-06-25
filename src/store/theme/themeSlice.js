import { createSlice } from '@reduxjs/toolkit'
import themeCookie from './themeCookie'
import themes from './themes'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light'
  },
  reducers: {
    setTheme: (state, action) => {
      const { payload } = action
      if (!themes.includes(payload)) {
        console.warn('Theme can only be light or dark')
        return
      }

      const isDark = payload === 'dark'
      const background = isDark ? '#000' : '#fff'
      const foreground = isDark ? '#fff' : '#292929'
      const linkColor = isDark ? '#3581ff' : '#1a0dab'

      document.documentElement.style.setProperty('--background', background)
      document.documentElement.style.setProperty('--foreground', foreground)
      document.documentElement.style.setProperty('--link', linkColor)
      state.value = action.payload

      themeCookie.set(payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions
export const selectTheme = (state) => state.theme.value
export default themeSlice.reducer
