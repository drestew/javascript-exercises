const ftoc = function (temp) {
  return Number(((temp - 32) * (5 / 9)).toFixed(1))
}

const ctof = function (temp) {
  return Number(((9 / 5) * temp + 32).toFixed(1))
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
}
