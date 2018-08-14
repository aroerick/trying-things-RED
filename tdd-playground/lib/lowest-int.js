module.exports = arr => {
  if (!arr || !Array.isArray(arr) || !arr.length) return 'error'
  let sort = arr.sort((a, b) => a - b)

  let unique = []
  for (let i = 0; i < sort.length; i++) {
    if (unique.indexOf(sort[i]) === -1) unique.push(sort[i])
  }
  let count = 0
  for (let i = 0; i < unique.length; i++) {
    if (typeof unique[i] !== 'number') return 'error'
    if (count !== unique[i] && count > 0) return count
    count++
  }
}