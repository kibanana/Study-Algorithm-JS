// 빈 줄, 공백만 있는 줄은 비교를 하지 않는다
// => filter로 제거

// n 개의 오픈소스 - 첫 번째 줄에는 파일 이름이 주어진다
// 파일 이름은 공백 포함 x, 중복되지 않는다
// => finalContentArr[n][0] 로 접근 가능

// 소스의 마지막 줄에는 ***END***
// => split에 이용

// 출력 형태: (연속된 줄의 수) (파일 이름)

import * as fs from 'fs';

let openSourceCnt; // 사용하지 않는 변수

const content = fs.readFileSync('codeLupinContent.txt');
const contentArr = [];

content.toString().split('***END***').forEach((value, i) => {
  const newArr = value.toString().split('\r\n');
  if(i === 0) {
    openSourceCnt = newArr.shift(); // 오픈소스 수 
  }
  
  contentArr.push(newArr.filter((f) => !!f.trim()));
  // 공백 => false => 걸러짐
});

const finalContentArr = contentArr.filter((e) => e.length > 0);

let duplCnt = 0;
let duplMax = {
  cnt: 0,
  sourceName: '',
};

console.log(finalContentArr);