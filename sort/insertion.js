const arr = [5, 6, 4, 2, 7, 8, 9, 35, 24, 11, 63];

const insertionSort = function (arr) {
  let temp, i = 1, j;
  
  for (i; i < arr.length; i++) {
    temp = arr[i];
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const result = insertionSort(arr);
console.log(result);