import PropTypes from 'prop-types'
import './toggle.css'

// Modified from a toggle tutorial
// https://dev.to/devggaurav/let-s-create-a-custom-toggle-switch-using-html-and-css-33df
const Toggle = ({
  onToggle,
  name,
  checked,
  offBackground,
  onBackground
}) => (
  <div className="toggle">
    <label className="toggle__body">
      <input
        className="checkbox"
        onChange={(e) => onToggle(e.target.value)}
        type="checkbox"
        role="checkbox"
        name={name}
        checked={checked}
        data-testid="toggle"
      />
      <div className="toggle__body__slider">
        {offBackground}
        <div className="toggle__body__slider__knob" />
        {onBackground}
      </div>
    </label>
  </div>
)

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  offBackground: PropTypes.node,
  onBackground: PropTypes.node
}

export default Toggle
