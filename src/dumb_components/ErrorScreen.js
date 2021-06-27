import { useEffect } from 'react'
import PropTypes from 'prop-types'

const ErrorScreen = ({ errorObject }) => {
  useEffect(() => {
    console.error(errorObject)
  }, [])

  return (
    <div className="error">
      <h3>
        Something went wrong. Tell Jay you saw this:
      </h3>
      <pre>
        <code>
          {JSON.stringify(errorObject, null, 2)}
        </code>
      </pre>
    </div>
  )
}

ErrorScreen.propTypes = {
  errorObject: PropTypes.object
}

export default ErrorScreen
