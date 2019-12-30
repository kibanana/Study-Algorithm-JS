// 1. 왜 for문의 조건식이 temp > arr[j] 이 아닌가?
// => 선택된 게 작아야지 계속될 수 있음. 크면 멈추고 삽입
// 2. 왜 arr[j] = arr[j + 1] 이 아닌가?
// => 앞에 있는 걸 뒤로 당기는 거니까. 반대다
const arr = [22, 33, 11, 5, 6, 7, 8, 99];

const pracInsertion = (arr) => {
  let i = 1, j, temp;
  for (i; i < arr.length; i++) {
    temp = arr[i];
    // ascending
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    // descending
    // for (j = i - 1; j >= 0 && arr[j] < temp; j--) {
    //   arr[j + 1] = arr[j];
    // }
    arr[j + 1] = temp;
  }
  return arr;
};

const result = pracInsertion(arr);
console.log(result);