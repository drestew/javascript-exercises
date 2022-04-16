const add = function (num1, num2) {
  return num1 + num2
}

const subtract = function (num1, num2) {
  return num1 - num2
}

const sum = function (numArr) {
  return numArr.reduce((acc, cur) => acc + cur, 0)
}

const multiply = function (numArr) {
  return numArr.reduce((acc, cur) => acc * cur)
}

const power = function (num1, num2) {
  return Math.pow(num1, num2)
}

const factorial = function (num) {
  let total = 1
  for (let i = 1; i <= num; i++) {
    total *= i
  }
  return total
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
