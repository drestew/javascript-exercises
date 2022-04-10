const sumAll = function (num1, num2) {
  if (
    [num1, num2].filter((num) => num < 0 || typeof num !== 'number').length > 0
  ) {
    return 'ERROR'
  }
  const min = Math.min(num1, num2)
  const max = Math.max(num1, num2)
  let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

// Do not edit below this line
module.exports = sumAll
