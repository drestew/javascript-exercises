const removeFromArray = function (arr, ...removals) {
  return arr.filter((num) => !removals.includes(num))
}

// Do not edit below this line
module.exports = removeFromArray
