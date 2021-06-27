import PropTypes from 'prop-types'
import './tooltip.scss'

const Tooltip = ({ text }) => <div className="tooltip">{text}</div>

Tooltip.propTypes = { text: PropTypes.string.isRequired }

export default Tooltip
