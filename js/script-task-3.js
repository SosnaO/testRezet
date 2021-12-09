let array = [
  ['Hello', 'world'],
  ['Brad', 'came', 'to', 'dinner', 'with', 'us'],
  ['He', 'loves', 'tacos'],
];

let position = ['LEFT', 'RIGHT', 'LEFT'];

function formating(arr) {
  const res = [];
  arr.forEach((el, i) => {
    let str = el.join(' ');
    let amountOfSpaces = Math.abs(16 - str.length);
    let right = '*' + ' '.repeat(amountOfSpaces) + 'a*';
    let left = '*a' + ' '.repeat(amountOfSpaces) + '*';
    if (str.length < 16) {
      if (position[i] == 'LEFT') {
        str = left.replace('a', str);
        res.push(str);
      } else {
        str = right.replace('a', str);
        res.push(str);
      }
    } else {
      let subStrLength = Math.floor(el.length / 2);
      let subArr = [[el.splice(0, subStrLength).join(' ')], [el.join(' ')]];
      subArr.forEach(el => {
        str = el.join(' ');
        amountOfSpaces = Math.abs(16 - str.length);
        right = '*' + ' '.repeat(amountOfSpaces) + 'a*';
        left = '*a' + ' '.repeat(amountOfSpaces) + '*';
        if (str.length < 16) {
          if (position[i] == 'LEFT') {
            str = left.replace('a', str);
            res.push(str);
          } else {
            str = right.replace('a', str);
            res.push(str);
          }
        }
      });
    }
  });
  res.push('******************');
  res.unshift('******************');
  return res;
}

console.log(formating(array));
