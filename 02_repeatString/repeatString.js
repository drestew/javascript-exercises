const repeatString = function (str, repeat) {
  if (repeat < 0) {
    return 'ERROR'
  }
  return str.repeat(repeat)
}

// Do not edit below this line
module.exports = repeatString
