import * as fs from 'fs';

const content = fs.readFileSync('latinContent.txt');
const contentArr = content.toString().split('\r\n');
const [ wordNum, ...wordArr ] = contentArr;

wordArr.forEach((value, i) => {
  value = value.replace(/a/g, 'as')
  .replace(/i/g, 'ios')
  .replace(/y/g, 'ios')
  .replace(/l/g, 'les')
  .replace(/n/g, 'anes')
  .replace(/ne/g, 'anes')
  .replace(/o/g, 'os')
  .replace(/r/g, 'res')
  .replace(/t/g, 'tas')
  .replace(/u/g, 'us')
  .replace(/v/g, 'ves')
  .replace(/w/g, 'was');

  console.log(`${i + 1}: ${value}`);
});