import { render, fireEvent } from 'app/testUtils'
import App from 'app/App'

test('renders theme switcher', () => {
  const { getByRole } = render(<App />)
  const toggle = getByRole('checkbox')
  expect(toggle).toBeInTheDocument()
})

test('toggles controlled Toggle component on click', () => {
  const { getByRole } = render(<App />)
  const toggle = getByRole('switch')
  fireEvent.click(toggle)
  expect(toggle).toBeChecked()
  fireEvent.click(toggle)
  expect(toggle).not.toBeChecked()
})
