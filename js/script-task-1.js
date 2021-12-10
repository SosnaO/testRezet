// В массиве, содержащем 3 или более чисел, определить подходит ли
// каждая группа из трех чисел условию a > b < c или a < b > c. Оформить
// решение в виде функции которая принимает исходный массив и возвращает
// массив с результатом проверки каждой группы, где 1 удовлетворяет
// условию и 0 - нет.
// Например:
// Исходный массив:[1, 3, 5, 4, 5, 7]

// Рассмотрим каждую группу:Рассмотрим каждую группу:
// 1, 3, 5 => 1 < 3 < 5 - нет
// 3, 5, 4 => 3 < 5 > 4 - да
// 5, 4, 5 => 5 > 4 < 5 - да
// 4, 5, 7 => 4 < 5 < 7 - нет
// Результат:  [0, 1, 1, 0]

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
