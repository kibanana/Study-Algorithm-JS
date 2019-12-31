const arr = [5, 6, 4, 2, 7, 8, 9, 35, 24, 11, 63];

// 불필요한 추가 연산을 수행하지 않음
// 최선의 경우(정렬된 배열) => O(n)
const enhancedBubble = (arr) => {
  let chk = true, temp;
  for (let i = 0; i < arr.length - 1 && chk; i++) {
    chk = false;
    for (let j = 0; j < arr.length -1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        chk = true;
      }
    }
  }
  return arr;
};

const result = enhancedBubble(arr);
console.log(result);