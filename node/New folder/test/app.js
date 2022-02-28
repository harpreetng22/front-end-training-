const os=require('os');
console.log(os.type())
const path=require('path')
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());

console.log(os.tmpdir())
console.log(os.arch())
console.log(path.extname('.index.md'));
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));