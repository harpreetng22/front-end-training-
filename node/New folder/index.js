const url=require('http');
const server=url.createServer((req,res)=>{
    const path=req.url;

    if(path=='/about')
    {
        res.writeHead(200,{
         'content-type':'text/html'
        })
        res.write('hello')
        res.end()
        
    }
    res.write('welcome');
    res.end();
});
server.listen(4000);
console.log(url);