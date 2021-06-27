import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from 'app/App'
import reportWebVitals from 'app/reportWebVitals'
import store from 'app/_store/store'
import { setTheme } from 'app/_store/theme/themeSlice'
import themeCookie from 'app/_store/theme/themeCookie'
import './index.scss'

const themeSaved = themeCookie.get()
store.dispatch(setTheme(themeSaved))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
