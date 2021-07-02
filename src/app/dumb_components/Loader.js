import './loader.scss'
import bartSkating from 'app/_images/bart_skating.gif'

export default () => (
  <div className="loader">
    <div className="loader__inner">
      <img
        src={bartSkating}
        alt="Animated GIF of Bart Simpson skateboarding. Page is loading."
      />
      <div><span>loading</span></div>
    </div>
  </div>
)
