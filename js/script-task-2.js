// function isNumber(element, indexStart) {
//   result = true;
//   if (element.length >= indexStart + 2) {
//     if (
//       element[indexStart] >= 1 &&
//       element[indexStart] <= 9 &&
//       element[indexStart + 1] >= 1 &&
//       element[indexStart + 1] <= 9 &&
//       element[indexStart + 2] >= 1 &&
//       element[indexStart + 2] <= 9
//     ) {
//       result = true;
//     } else {
//       result = false;
//     }
//   }
//   return result;
// }

function isSorted(numbers) {
  let array = [];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    indexStart = 0;
    let element = numbers[i];
    if (i >= 2) {
      for (let index = 0; index < element.length; index++) {
        if (
          numbers[i].length > indexStart + 2 &&
          numbers[i - 1].length > indexStart + 2 &&
          numbers[i - 2].length > indexStart + 2
        ) {
          if (
            isNumber(numbers[i], indexStart) &&
            isNumber(numbers[i - 1], indexStart) &&
            isNumber(numbers[i - 2], indexStart)
          ) {
            result.push(true);
          } else {
            result.push(false);
          }
        }
        indexStart++;
      }
    }
  }
  console.log('result', result);
  return result;
}
function isNumber(element, indexStart) {
  result = true;
  if (element.length >= indexStart + 2) {
    if (
      element[indexStart] >= 1 &&
      element[indexStart] <= 9 &&
      element[indexStart + 1] >= 1 &&
      element[indexStart + 1] <= 9 &&
      element[indexStart + 2] >= 1 &&
      element[indexStart + 2] <= 9
    ) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

isSorted([
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
]);
