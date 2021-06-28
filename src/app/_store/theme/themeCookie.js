export default {
  set: (theme) => {
    document.cookie = `noNavTheme=${theme}; expires=Fri, 25 Jun 2038 23:00:00 UTC; path=/`
  },
  get: () => {
    const name = 'noNavTheme='
    const cookieDecoded = decodeURIComponent(document.cookie)
    const cookieSplit = cookieDecoded.split('; ')
    let res
    cookieSplit.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length)
    })
    if (res === 'light' || res === 'dark') return res
    return null
  },
  delete: () => {
    document.cookie = 'noNavTheme= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
  }
}
