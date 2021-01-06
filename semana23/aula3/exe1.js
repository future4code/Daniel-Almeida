const printNumbers = (integer) => {
  if (integer >= 0) {
    printNumbers(integer - 1)
    console.log(integer)
  }
}

const printNumbers2 = (integer) => {
  if (integer <= 0) {
    printNumbers2(integer - 1)
    console.log(integer)
  }
}
printNumbers2(10)
