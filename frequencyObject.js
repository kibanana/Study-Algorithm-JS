/* 문자열을 받아 그 중에서 가장 빈도수가 많은 단일문자를 찾는 함수 */

const str = '김예원은 밥을 먹는다 김예원은 무언가를 한다 김김김';

const countFrequency = (frequencyStr) => {
  // eslint-disable-next-line no-param-reassign
  frequencyStr = frequencyStr.replace(/\s+/g, '');

  if (!frequencyStr.length) {
    return '함수에 전달된 값이 문자열이 아닙니다!';
  }

  const result = [];

  // 문자열 순회
  for (const value of frequencyStr) {
    // result 배열들에 아무 값이 없을 경우 for문이 정상적으로 작동하지 않으므로 따로 분리함
    if (!result.length) {
      result.push({ v: value, cnt: 1 });
    }

    // 이미 result 배열에 있는 값 체크: 인덱스를 비교해야 함
    const tempIdx = result.findIndex((e) => {
      return e.v === value;
    });
    if (tempIdx === -1) {
      result.push({ v: value, cnt: 1 });
    } else {
      result[result.map((e) => e.v).indexOf(value)].cnt++;
    }
  }

  // 1)
  // const maxCnt = result.map((e) => e.cnt).reduce((now, next) => {
  //   return Math.max(now, next);
  // });

  // 2)
  const maxCnt = Math.max(...result.map((e) => e.cnt));

  const maxIdx = result.findIndex((e) => {
    return e.cnt === maxCnt;
  });

  return result[maxIdx];
};

console.log(countFrequency(str));
