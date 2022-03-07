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

// const express=require('express');

// const app=express();
// const {greet,greetmsg}=require('./product.js');
// app.use(greet);
// app.use(greetmsg);


// app.get('/',(req,res)=>{
//     res.send("get");
// })
// app.listen(4001);const express=require('express');

const express=require('express');
const app=express();
const products=require('./product.js');
const user=require('./user.js');

app.use(express.static('./static'));

app.use('/products',products);
app.use('/user',user);




app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/static/home.html`);
})
app.listen(4001);