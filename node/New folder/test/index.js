const fs=require('fs');
//console.log(fs);
//readfile
readOp=fs.readFileSync('./xyz.txt','utf-8');
console.log(readOp);

//writefile
fs.writeFileSync('./xyz.txt','hello');

//append file
fs.appendFileSync('./xyz.txt',` here`);
fs.writeFileSync('./xyz.txt',` i am`,{flag:'a'});

//delete
//fs.unlinkSync('abc.txt');

const path=require('path')


fs.writeFileSync('./test/xyz.txt','hello');

