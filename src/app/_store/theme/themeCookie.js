import themes from './themes'

export default {
  set: (theme) => {
    document.cookie = `noNavTheme=${theme}; expires=Fri, 25 Jun 2038 23:00:00 UTC; path=/`
  },
  get: () => {
    const name = 'noNavTheme='
    const cookieDecoded = decodeURIComponent(document.cookie)
    const cookieSplit = cookieDecoded.split('; ')
    let res = 'light'
    cookieSplit.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length)
    })
    if (themes.includes(res)) return res
    return 'light'
  }
}
