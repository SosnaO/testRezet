// function isSorted(boxNumbers) {
//   array = [];
//   for () {
//   for (let i = 1; i < boxNumbers.length; i++) {
//     if (boxNumbers[i - 1] > boxNumbers[i]) {
//       return console.log(false);
//     }
//   }
// }
//   return console.log(true);
// }

function isSorted(boxNumbers) {
  let array = [];
  let array1 = [];
  for (let i = 0; i < boxNumbers.length; i++) {
    // if (boxNumbers[i] === 3) {
    // array[i] = [boxNumbers[i], boxNumbers[i + 1], boxNumbers[i + 2]];

    array.push(boxNumbers[i], boxNumbers[i + 1], boxNumbers[i + 2]);
    // if (array[i].length === 3) {
    //   console.log('aray', array);
    if (array[i] > array[i + 1] && array[i + 1] < array[i + 2]) {
      array1[i] = 1;
    } else array1[i] = 0;
    console.log('aray1', array1);
    // }
    // return array;
  }
  // if (array[i].length <= 3 && array[i].length > 2) {
  //   console.log(array[i]);
  // for (let i = 0; i < 3; i++) {
  //   if (array[i] > array[i + 1] < array[i + 2]) {
  //     array1[i] = 1;
  //   } else array1[i] = 0;

  //   if (array[i] < array[i + 1] > array[i + 2]) {
  //     array1[i] = 1;
  //   } else array1[i] = 0;
  //   // }
  //   console.log('array1', array1);
  // return array1;
}

// if (boxNumbers.length <= 3 && boxNumbers.length > 2) {
//if (boxNumbers.length[i] === 3) {
//   if (
//     boxNumbers.length[i] >
//     boxNumbers.length[i + 1] <
//     boxNumbers.length[i + 2]
//   ) {
//     array[i] = 1;
//   } else array[i] = 0;

//   if (
//     boxNumbers.length[i] <
//     boxNumbers.length[i + 1] >
//     boxNumbers.length[i + 2]
//   ) {
//     array[i] = 1;
//   } else array[i] = 0;
// }
// console.log('малегький массив');
// return array;

// console.log(array[1]);
// console.log(array);
// array[i] = boxNumbers[i];
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //массив, можно использовать массив объектов
// let size = 3; //размер подмассива
// let subarray = []; //массив в который будет выведен результат.
// for (let i = 0; i < Math.ceil(boxNumbers.length / size); i++) {
//   subarray[i] = boxNumbers.slice(i * size, i * size + size);
// }
// console.log(subarray);

isSorted([1, 3, 5, 4, 5, 7]); //=== true;
