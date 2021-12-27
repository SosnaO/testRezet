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
function formattting2(ar) {
  const result = [];
  ar.forEach(el => {
    let string = el.string;
    let number = Math.abs(16 - string.length);
    let right = '*' + ' '.repeat(number) + 'a*';
    let left = '*a' + ' '.repeat(number) + '*';
    if (el.position === 'LEFT') {
      string = left.replace('a', string);
      result.push(string);
    } else {
      string = right.replace('a', string);
      result.push(string);
    }
  });
  return result;
}
function formating(array) {
  let position = ['LEFT', 'RIGHT', 'LEFT'];
  let result = [];
  array.forEach((el, i) => {
    let string = el.join(' ');
    if (string.length < 16) {
      result.push({
        string: string,
        position: position[i],
      });
    } else {
      let resultString = '';
      for (let j = 0; j < el.length; j++) {
        if (String(resultString + ' ' + el[j]).length > 16) {
          result.push({
            string: resultString,
            position: position[i],
          });
          resultString = el[j];
        } else {
          resultString = String(resultString + ' ' + el[j]).trimStart();
        }
      }
      if (resultString.length > 0) {
        result.push({
          string: resultString,
          position: position[i],
        });
      }
    }
  });
  result = formattting2(result);
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
