import reducer, { setTheme } from './themeSlice'

describe('themeSlice', () => {
  const originalWarn = console.warn
  const consoleWarnMock = jest.fn()
  beforeEach(() => (console.warn = consoleWarnMock))
  afterEach(() => (console.warn = originalWarn))

  test('should set theme only for "light" or "dark"', () => {
    const previousState = {
      value: 'light'
    }
    const testSetTheme = (color) => reducer(previousState, setTheme(color))
    expect(testSetTheme('dark')).toEqual({
      value: 'dark'
    })
    expect(testSetTheme('light')).toEqual({
      value: 'light'
    })
    const setGreen = testSetTheme('green')
    expect(consoleWarnMock).toBeCalled()
    expect(setGreen).toEqual({
      value: 'light'
    })
  })
})
