const fs=require('fs');

//readfile
const readOp=fs.readFile('abc.txt','utf-8',(err,result)=>{
    if(err)
    {console.log(err)}
     
    console.log('result')
});
console.log(readOp);

//writefile
fs.writeFile('./xyz.txt','hello',(err)=>{
    if(err)
    {console.log(err)}
     
    console.log('done')
});

