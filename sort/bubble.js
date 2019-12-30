const arr = [5, 6, 4, 2, 7, 8, 9, 35, 24, 11, 63];

const bubbleSort = (arr) => {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const result = bubbleSort(arr);
console.log(result);