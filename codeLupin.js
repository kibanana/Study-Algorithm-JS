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
    openSourceCnt = newArr.shift(); // 오픈소스 수 (사용하지 않는 변수)
  }
  
  contentArr.push(newArr.filter((f) => !!f.trim()));
  // 공백 => false => 걸러짐
});

// 빈 배열 걸러짐
const finalContentArr = contentArr.filter((e) => e.length > 0);
const finalLen = finalContentArr.length;

let duplCnt = [];
let newDupl;

// 소스 코드 공백 제거
for (let i = 0; i < finalContentArr[finalLen - 1].length; i++) {
  finalContentArr[finalLen - 1][i] = finalContentArr[finalLen - 1][i].replace(/(^ *)|( *$)/g, '').replace(/ +/g, ' ');
}

// 메인 로직
for (let i = 0; i < finalLen - 1; i++) {
  newDupl = {};

  // arr[i][0] => 파일명이므로
  for (let j = 1; j < finalContentArr[i].length; j++) {
    // 현재 소스 코드, 오픈 소스 비교
    if (finalContentArr[finalLen - 1].indexOf(finalContentArr[i][j].replace(/(^ *)|( *$)/g, '').replace(/ +/g, ' ')) != -1) {
      if (!newDupl.cnt) {
        newDupl.cnt = 1;
        newDupl.finalPosition = finalContentArr[finalLen - 1].indexOf(finalContentArr[i][j]);
        newDupl.name = finalContentArr[i][0];
      } else {
        console.log(newDupl);
        if ((newDupl.finalPosition + 1) == finalContentArr[finalLen - 1].indexOf(finalContentArr[i][j].replace(/(^ *)|( *$)/g, '').replace(/ +/g, ' '))) {
          newDupl.cnt ++;
          newDupl.finalPosition ++;
        } else {
          duplCnt.push(newDupl);
          newDupl = {
            cnt: 1,
            finalPosition: finalContentArr[finalLen - 1].indexOf(finalContentArr[i][j]),
            name: finalContentArr[i][0],
          };
        }
      }
    } // if
  } // for
  duplCnt.push(newDupl);
  newDupl = {};
} // for

const result = duplCnt.sort((now, next) => next.cnt - now.cnt)[0];
console.log(`${result.cnt} ${result.name}`);