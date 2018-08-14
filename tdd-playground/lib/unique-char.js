module.exports = str => {
  if ( !str || typeof str !== 'string' || !str.length ) return 'error'

  strArr = str.replace(/[\s\W\d]/g, '').split('')
  strObj = {}

  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i]
    strObj[char] = strObj[char] ? strObj[char] + 1 : 1
  }
  result = Object.keys(strObj).filter(key => strObj[key] === 1)[0]
  return result
}