// module.exports = comp => {
//   if (typeof comp === 'string') {
//     compArr = comp.replace(/[\s\W] /g, '').split('')

//     compObj = {}

//      for (let i = 0; i < compArr.length; i++) {
//        let num = compArr[i]
//        if(num.match(/[a-z]/i)){
//          compObj[num] = compObj[num] ? compObj[num] + 1 : 1
//        } else {
//          return 'error'
//        }
//      }
//     // compArr.forEach(char => {
//     //   console.log(compArr.indexOf(char))
//     //   if (true) {
//     //     compObj[char] = compObj[char] ? compObj[char] + 1 : 1
//     //   } else {
//     //     return 'error'
//     //   }
//     // })

//     if (Object.keys(compObj) === []){
//       return 'error'
//     } else {
//       const arrObj = Object.entries(compObj)
//       const comped = [].concat.apply([], arrObj).join('')
//       console.log(Object.keys(compObj))
//       return comped
//     }
//   } else {
//     return 'error'
//   }
// }
module.exports = str => {
  let output = ''
  let count = 0
  if (typeof str !== 'string' || str === '') return 'error'
  for (let i = 0; i < str.length; i++) {
    count++
    newStr = str.replace(/[\s\W\0-9]/g, '')
    if (newStr[i] != newStr[i + 1]) {
      output += newStr[i] + count
      count = 0
    }
  }
  return output
}
