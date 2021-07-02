import PropTypes from 'prop-types'
import ErrorScreen from './ErrorScreen'
import Loader from './Loader'

const PageWrapper = ({ children, error, isLoading }) => {
  if (isLoading) return <Loader />
  if (error) return <ErrorScreen errorObject={error} />

  return <div style={{ padding: '50px 20px' }}>{children}</div>
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  // not sure why an error is a function but this is what PropTypes told me to do
  // 🤷‍♂️
  error: PropTypes.func,
  isLoading: PropTypes.bool
}

export default PageWrapper
