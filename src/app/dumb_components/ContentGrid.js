import PropTypes from 'prop-types'
import './contentGrid.scss'

const ContentGrid = ({ items }) => (
  <ul className="content-grid">
    {items.map((item, i) => <li className="book" key={i}>{item}</li>)}
  </ul>
)

ContentGrid.propTypes = {
  items: PropTypes.array.isRequired
}

export default ContentGrid
