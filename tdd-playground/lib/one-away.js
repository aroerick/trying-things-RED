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

  return true
}
