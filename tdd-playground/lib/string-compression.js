module.exports = str => {
  let output = ''
  let count = 0
  if (typeof str !== 'string' || str === '') return 'error'
  for (let i = 0; i < str.length; i++) {
    count++
    newStr = str.replace(/[\s\W\0-9]/g, '')
    if (newStr[i] !== newStr[i + 1]) {
      output += newStr[i] + count
      count = 0
    }
  }
  return output
}
