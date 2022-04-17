const caesar = function (string, shiftNum) {
  const charCodeIntegers = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = charCodeIntegers.map((x) =>
    String.fromCharCode(x).toLowerCase()
  )
  const strArr = string.split('')
  const newStr = strArr.reduce((acc, cur) => {
    let newCharIndex = alphabet.indexOf(cur.toLowerCase())
    if (newCharIndex === -1) {
      return (acc += cur)
    } else {
      if (newCharIndex + shiftNum >= 26) {
        newCharIndex -= 26
        if (newCharIndex + shiftNum >= 26) {
          newCharIndex -= 26
          if (newCharIndex + shiftNum >= 26) {
            newCharIndex -= 26
          }
        }
      } else if (newCharIndex + shiftNum < 0) {
        newCharIndex += 26
        if (newCharIndex + shiftNum < 0) {
          newCharIndex += 26
          if (newCharIndex + shiftNum < 0) {
            newCharIndex += 26
          }
        }
      }
      let newStr = alphabet[newCharIndex + shiftNum]
      return (acc += cur.toUpperCase() === cur ? newStr.toUpperCase() : newStr)
    }
  }, '')
  return newStr
}
caesar('Hello, World!', 75)
// Do not edit below this line
module.exports = caesar
