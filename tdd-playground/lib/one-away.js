module.exports = (str, tar) => {
  if (
    !str ||
    !tar ||
    typeof str !== 'string' ||
    typeof tar !== 'string' ||
    !str.length ||
    !tar.length
  )
    return 'error'

  let countA = 0
  let countB = 0
  let diff = 0

  if(str.length > tar.length) {lon = str, sho = tar} else {lon = tar, sho = str}
  if(lon.length - sho.length > 1) return false

  for (let i = 0; i < lon.length; ++i) {
    if (lon.length === sho.length) {
      if(lon[countA] === sho[countA]) {
        countA++
      } else {
        countA++
        diff++
      }
    }
    else if (lon[countA] === sho[countB]) {
      countA++
      countB++
    } else {
      countA++
      diff++
    }
  }
  return diff > 1 ? false : true
}
