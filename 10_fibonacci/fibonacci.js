const fibonacci = function (num) {
  if (num < 0) return 'OOPS'
  num = Number(num)
  let fibArr = [0, 1]
  for (let i = 0; i < num; i++) {
    fibArr.push(fibArr[i] + fibArr[i + 1])
    if (fibArr.length === num + 1) {
      return fibArr.pop()
    }
  }
  return fibArr[num]
}
// fibonacci('1')
// Do not edit below this line
module.exports = fibonacci
