module.exports = comp => {
  compArr = comp.replace(/[\s\W] /g, '').split('')

  compObj = {}

  for (let i = 0; i < compArr.length; i++) {
    let num = compArr[i]
    compObj[num] = compObj[num] ? compObj[num] + 1 : 1
  }
  const arrObj = Object.entries(compObj)
  const comped = [].concat.apply([], arrObj).join('')

  return comped
  console.log([].concat.apply([], arrObj).join(''))
}
