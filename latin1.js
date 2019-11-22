import * as fs from 'fs';

const content = fs.readFileSync('latinContent.txt');
const contentArr = content.toString().split('\r\n');
const [ wordNum, ...wordArr ] = contentArr;

const grammarArr = [];
grammarArr.push({rgex: /a$/, result: 'as'});
grammarArr.push({rgex: /y$/, result: 'ios'});
grammarArr.push({rgex: /l$/, result: 'les'});
grammarArr.push({rgex: /ne$/, result: 'anes'});
grammarArr.push({rgex: /n$/, result: 'anes'});
grammarArr.push({rgex: /o$/, result: 'os'});
grammarArr.push({rgex: /r$/, result: 'res'});
grammarArr.push({rgex: /t$/, result: 'tas'});
grammarArr.push({rgex: /u$/, result: 'us'});
grammarArr.push({rgex: /v$/, result: 'ves'});
grammarArr.push({rgex: /w$/, result: 'was'});

let oriValue = '';

wordArr.forEach((value, i) => {
  oriValue = value;

  for(let j = 0; j < grammarArr.length; j++) {
    let g = grammarArr[j];
    if(g.rgex.test(value)) {
      value = value.replace(g.rgex, g.result);
      break;
    }
  }

  if(oriValue === value) {
    value = value + 'us';
  }
  
  console.log(value);
});