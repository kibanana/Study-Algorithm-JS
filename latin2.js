import * as fs from 'fs';

const content = fs.readFileSync('latinContent.txt');
const contentArr = content.toString().split('\r\n');
const [ wordNum, ...wordArr ] = contentArr;

wordArr.forEach((value) => {
  switch(value) {
    case (value.match(/a$/) || {}).input: value = value.replace(/a$/, 'as'); break;
    case (value.match(/y$/) || {}).input: value = value.replace(/y$/, 'ios'); break;
    case (value.match(/l$/) || {}).input: value = value.replace(/l$/, 'les'); break;
    case (value.match(/ne$/) || {}).input: value = value.replace(/ne$/, 'anes'); break;
    case (value.match(/n$/) || {}).input: value = value.replace(/n$/, 'anes'); break;
    case (value.match(/o$/) || {}).input: value = value.replace(/o$/, 'os'); break;
    case (value.match(/r$/) || {}).input: value = value.replace(/r$/, 'res'); break;
    case (value.match(/t$/) || {}).input: value = value.replace(/t$/, 'tas'); break;
    case (value.match(/u$/) || {}).input: value = value.replace(/u$/, 'us'); break;
    case (value.match(/v$/) || {}).input: value = value.replace(/v$/, 'ves'); break;
    case (value.match(/w$/) || {}).input: value = value.replace(/w$/, 'was'); break;
    default: value = value + 'us';
  }

  console.log(value);
});