// 3. Есть набор строк (строка это массив из слов), условия форматирования
// каждой этой строки и лимит символов в строке. Необходимо подготовить
// текст к публикации, так чтобы он удовлетворял условиям форматирования и
// не превышал количество символов в строке. Текст должен быть заключен
// символ * со всех сторон.
// Например:
// Набор строк, представлен в виде массива:
// [
//   ['Hello', 'world'],
//   ['Brad', 'came', 'to', 'dinner', 'with', 'us'],
//   ['He', 'loves', 'tacos'],
// ];
// Отдельным массивом задаются условия форматирования, где LEFT
// указывает что текст нужно выровнять по левой стороне, а RIGHT по правой:
// ['LEFT', 'RIGHT', 'LEFT'][
// Лимит символов в строке, целое положительное число: 16
// 1я исходная строка удовлетворяет условию лимита строки "Hello world" (11
// chars < 16). Учитывая правило форматирования для 1й строки LEFT.
// 2я исходная строка не влазит в лимит "Brad came to dinner with us" (27 chars
// > 16), значит разбиваем на строки и применяем правило форматирования
// RIGHT для всех этих строк.
// Итого на выходе должен быть такой результат:
//   ('******************',
//   '*Hello world     *',
//   '*    Brad came to*',
//   '*  dinner with us*',
//   '*He loves tacos  *',
//   '******************')
// ];

function formating(array) {
  let position = ['LEFT', 'RIGHT', 'LEFT'];
  const result = [];

  array.forEach((el, i) => {
    let string = el.join(' ');
    let number = Math.abs(16 - string.length);
    let right = '*' + ' '.repeat(number) + 'a*';
    let left = '*a' + ' '.repeat(number) + '*';
    if (string.length < 16) {
      if (position[i] === 'LEFT') {
        string = left.replace('a', string);
        result.push(string);
      } else {
        string = right.replace('a', string);
        result.push(string);
      }
    } else {
      let subArray = [[el.splice(0, el.length / 2).join(' ')], [el.join(' ')]];
      subArray.forEach(el => {
        string = el.join(' ');
        if (string.length < 16) {
          if (position[i] === 'LEFT') {
            string = left.replace('a', string);
            result.push(string);
          } else {
            string = right.replace('a', string);
            result.push(string);
          }
        }
      });
    }
  });
  result.push('******************');
  result.unshift('******************');
  console.log(result);
  return result;
}

formating([
  ['Hello', 'world'],
  ['Brad', 'came', 'to', 'dinner', 'with', 'us'],
  ['He', 'loves', 'tacos'],
]);
