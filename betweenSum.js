const between = {
  small: 10,
  big: 14,
};
let allSum = 0;

// 문자열로 바꾸고, 각각 숫자로 변환해서 allSum에 더하기
for (let i = between.small; i <= between.big; i++) {
  i.toString().split('').forEach((v) => {
    if(!isNaN(Number(v))) {
      allSum = allSum + Number(v);
    }
  });
}

console.log(allSum);