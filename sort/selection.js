const arr = [5, 6, 4, 2, 7, 8, 9, 35, 24, 11, 63];

// 가장 작은 수를 선택해서 정해진 위치에 대입
const selectionSort = function (arr) {
  let len = arr.length;
  let minIndex, temp;

  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { // 정렬
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }
  return arr;
};

const result = selectionSort(arr);
console.log(result);