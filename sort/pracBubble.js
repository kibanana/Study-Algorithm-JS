// 1. 왜 두 for의 조건문에 - 1 을 해야 하나?
// => i: j를 따라감
// => j: 어차피 arr[j + 1] 해서 쓸거라 한 번 더 돌려도 의미가 없다
// 2. 왜 chk를 i의 for문에 써야 하나?
// => j의 for문에 쓰면 어디에 chk = false; 를 써야 할지 모르겠음
// => j의 for문의 첫번째에서 안 걸리는데 두번째에는 교체할 게 있어서 걸릴 수도 있잖음?
// => 큰 기준으로 chk를 해주는 게 맞는 것 같음
// => 만약 chk를 j의 for문에 쓰면 조건에 한 번도 안 해당된다

const arr1 = [22, 33, 11, 5, 6, 7, 8, 99];
const arr2 = [22, 33, 11, 5, 6, 7, 8, 99];

const bubbleSort = (arr) => {
  let temp, cnt = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(++cnt + ' bubble');
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const enhancedBubbleSort = (arr) => {
  let temp, chk = true, cnt = 0;
  for (let i = 0; i < arr.length - 1 && chk; i++) {
    chk = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(++cnt + ' enhanced bubble');
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

const result1 = bubbleSort(arr1);
const result2 = enhancedBubbleSort(arr2);

console.log(result1);
console.log(result2);