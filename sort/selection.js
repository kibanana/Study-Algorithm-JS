const arr = [5, 6, 4, 2, 7, 8, 9, 35, 24, 11, 63];

const selectionSort = function (arr) {
  let len = arr.length;
  let minIndex, temp;

  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const result = selectionSort(arr);
console.log(result);