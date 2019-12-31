const arr = [5, 6, 4, 2, 7, 8, 9, 35, 24, 11, 63];

const bubbleSort = (arr) => {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length -1 - i; j++) {
      // 왜 j = i + 1이 아닐까?
      // i는 배열 요소의 교환에 직접적인 영향을 끼치지 않으므로
      // i는 정렬된 값을 비교 대상에서 제외하는 역할만 한다(오른쪽부터)
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