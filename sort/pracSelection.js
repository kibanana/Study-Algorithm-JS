const arr = [22, 33, 11, 5, 6, 7, 8, 99];

const pracSelection = (arr) => {
  let minIndex, temp;
  for (let i = 0; i < arr.length -1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const result = pracSelection(arr);
console.log(result);