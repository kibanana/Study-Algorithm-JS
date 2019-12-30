const arr = [5, 6, 4, 2, 7, 8, 9, 35, 24, 11, 63];

// 첫 번째 숫자는 pass
// 두 번째 숫자부터 n-1 숫자보다 크면 그 오른쪽에, 작으면 왼쪽에 삽입
// i: 뽑은 숫자의 위치
// j: 뽑은 숫자를 삽입할 위치
const insertionSort = function (arr) {
  let temp, i = 1, j;
  // j는 for문 밖에서도 쓰이기 때문에 for문 초기식에 정의하면 안됨

  for (i; i < arr.length; i++) {
    temp = arr[i];
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) { // 정렬
      // 뽑은 숫자가 그 전의 숫자보다 작을 때 for문 계속
      arr[j + 1] = arr[j];
    }
    // for문 밖의 j가 -1일 때가 종종 있다. 왜? for문 조건은 0보다 클 때인데?
    // >= 0 이라는 조건문에 걸려서 for문을 나오면, 그 값은 0보다 작다는 것. 그래서 j+1 해줘야함
    arr[j + 1] = temp;
    console.log(arr);
  }
  return arr;
}

const result = insertionSort(arr);
console.log(result);