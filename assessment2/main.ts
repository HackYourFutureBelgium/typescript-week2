function sumOfMultiple(limit: number): number {
  // Your code goes here

  let sum: number = 0;

  for (let i = 0; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log("sum " + sum);

  return sum;
}

const result: number = sumOfMultiple(1000);

console.log(result);

module.exports = sumOfMultiple;
