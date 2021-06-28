import reducer, { toggleTheme } from './themeSlice'

describe('themeSlice', () => {
  const originalWarn = console.warn
  const consoleWarnMock = jest.fn()
  beforeEach(() => (console.warn = consoleWarnMock))
  afterEach(() => (console.warn = originalWarn))

  test('should set theme only for "light" or "dark"', () => {
    window.matchMedia = jest.fn(() => ({ matches: false }))
    const previousState = {
      theme: 'light',
      useSystemTheme: false
    }
    const testToggleDark = (color) => reducer(previousState, toggleTheme(color))
    expect(testToggleDark()).toEqual({
      theme: 'dark',
      useSystemTheme: false
    })
    previousState.theme = 'dark'
    const testToggleLight = (color) => reducer(previousState, toggleTheme(color))
    expect(testToggleLight()).toEqual({
      theme: 'light',
      useSystemTheme: false
    })
  })
})
