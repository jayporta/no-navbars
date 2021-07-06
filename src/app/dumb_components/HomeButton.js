import { useHistory } from 'react-router-dom'
import { ReactComponent as HomeButtonSvg } from 'app/_images/home.svg'
import './homeButton.scss'

export default () => {
  const history = useHistory()

  return (
    <button
      className="home-button"
      onClick={() => history.push('/')}
    >
      <HomeButtonSvg />
    </button>
  )
}
