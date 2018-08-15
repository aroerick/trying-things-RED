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
  if (
    (str.length > tar.length && str.length - tar.length !== 1) ||
    (tar.length > str.length && tar.length - str.length !== 1)
  )
    return false
    
  if (str.length - tar.length === 1) {
    console.log('deletion')
  } else if (tar.length - str.length === 1) {
    console.log('addition')
  } else {
    console.log('substitution')
  }
  return true
}
