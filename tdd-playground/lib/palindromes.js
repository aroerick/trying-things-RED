module.exports = str => {
  reverso =
    typeof str === 'string'
      ? str
          .toLowerCase()
          .replace(/[\s\W] /g, '')
          .split()
          .reverse()
          .join('')
      : null

  modStr =
    typeof str === 'string' ? str.toLowerCase().replace(/[\s\W] /g, '') : false

  return reverso === modStr
}
