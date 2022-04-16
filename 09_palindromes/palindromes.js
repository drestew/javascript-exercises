const palindromes = function (str) {
  const normalStr = str
    .replace('!', '')
    .replace('.', '')
    .replaceAll(',', '')
    .split(' ')
    .join('')
    .toLowerCase()
  const reverseStr = normalStr.split('').reverse().join('')

  return normalStr === reverseStr
}

palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes
