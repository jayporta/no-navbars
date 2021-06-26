import { render, fireEvent } from './testUtils'
import App from './App'

test('renders theme switcher', () => {
  const { getByRole } = render(<App />)
  const toggle = getByRole('checkbox')
  expect(toggle).toBeInTheDocument()
})

test('toggles controlled checkbox on click', () => {
  const { getByRole } = render(<App />)
  const toggle = getByRole('checkbox')
  fireEvent.click(toggle)
  expect(toggle).toBeChecked()
  fireEvent.click(toggle)
  expect(toggle).not.toBeChecked()
})
