module.exports = str => {
  if (typeof str !== 'string' || str === '') return 'error'
  strArr = str.replace(/[\s\W]/i, '').split('')

  strObj = {}
  for (let i = 0; i < strArr.length; i++) {
    let num = strArr[i]
    if (!num.match(/[a-z]/i)) return 'error'
    strObj[num] = strObj[num] ? strObj[num] + 1 : 1

  }
  result = Object.keys(strObj).find(key => strObj[key] === 1)
  // if(!result) return 'error'
  return result
}
