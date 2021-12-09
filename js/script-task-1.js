function isSorted(numbers) {
  let array = [];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i >= 2) {
      array.push(numbers[i], numbers[i - 1], numbers[i - 2]);
      if (
        (numbers[i] > numbers[i - 1] && numbers[i - 1] < numbers[i - 2]) ||
        (numbers[i] < numbers[i - 1] && numbers[i - 1] > numbers[i - 2])
      ) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  }
  console.log('result', result);
  return result;
}
isSorted([1, 3, 5, 4, 5, 7]);
