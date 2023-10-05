// exports.max = (numbers) => {
//   let result = numbers[0];
//   numbers.forEach((n) => {
//     if (n > result) {
//       result = n;
//     }
//   });
//   return result;
// };

// exports.minimum = (numbers) => {
//   let result = numbers[3];
//   for (let x of numbers) {
//     if (x < result) {
//       result = x;
//     }
//   }
//   return result;
// };

// exports.avg = (numbers) => {
//   let sum = 0;
//   for (let x of numbers) {
//     sum += x;
//   }
//   return sum / numbers.length;
// };

exports.max = (numbers) => Math.max(...numbers);
exports.minimum = (numbers) => Math.min(...numbers);
exports.avg = (numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
};

exports.sort = (numbers) => numbers.sort((a, b) => a - b);

exports.median = (numbers) => {
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2) {
    return numbers[middle];
  }
  return (numbers[middle - 1] + numbers[middle]) / 2;
};
