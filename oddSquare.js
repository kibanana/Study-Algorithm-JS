const readline = require('readline');

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

io.on('line', (input) => {
  console.log(oddSquare(input));
  process.exit(0);
});

function oddSquare(str) {
  let sum = 0;
  const strArr = str.split("");
  strArr.forEach((letter) => {
    if (!isNaN(letter)) {
      sum += Math.pow(Number(letter), 2)
    }
  })
  return sum;
}