module.exports = arr => {
  if (!arr || !Array.isArray(arr) || !arr.length) return 'error'

  let result = [];

  for (let i = 0; i < arr.length; ++i) {
    if(typeof arr[i] !== 'number') return 'error'
    if (0 <= arr[i]) {
      result[arr[i]] = true;
    }
  }

  for (let i = 1; i <= result.length; ++i) {
    if (undefined === result[i]) {
      return i;
    }
  }

  return 1

  // const set = new Set(arr)
  // let i = 1
  // while (set.has(i)) {
  //   i++
  // }
  // return i

  // let sort = arr.sort((a, b) => a - b)

  // let unique = []
  // for (let i = 0; i < sort.length; i++) {
  //   if (unique.indexOf(sort[i]) === -1) unique.push(sort[i])
  // }
  // if(unique.includes(1)) return 1
  
  // let count = 0
  // for (let i = 0; i < unique.length; i++) {
  //   count++
  //   if (count !== unique[i]) return count
  // }
}
