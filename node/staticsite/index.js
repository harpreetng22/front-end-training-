// const http=require('http');
// const fs=require('fs');

// const server=http.createServer((req,res)=>{
//     const path=req.url;

//     if(path=='/')
//     {
//         res.writeHead(200,{
//          'content-type':'text/html'
//         })
//         const file=fs.readFileSync('./static/home.html')
//         res.write(file)
       
        
//     } res.end()

// });

const express=require('express');
const greet=require('./product.js');
const app=express();

app.use(greet);

app.get('/',(req,res)=>{
    res.send("get");
})
server.listen(4001);