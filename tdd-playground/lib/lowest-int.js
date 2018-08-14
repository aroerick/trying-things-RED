module.exports = arr => {
  if (!arr || !Array.isArray(arr) || !arr.length) return 'error'
  sort = arr.sort((a, b) => a - b)

  count = 0
  for (let i = 0; i < sort.length; i++) {
    if (typeof sort[i] !== 'number') return 'error';
    if (count !== sort[i] && count > 0) return count
    count++
  }
}
