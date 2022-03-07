const express=require('express');
const server=express();
server.use(express.json());
let userlist=[
    {
        id:1,
        name:"harpreet",
        email:"abc@gmail.com"
    },
    {
        id:2,
        name:"ram",
        email:"ram@gmail.com"
    },
    {
        id:3,
        name:"sham",
        email:"sham@gmail.com"
    }
]

//GET
server.get('/users',(req,res)=>{
    res.send(userlist)
})

//POST
server.post('/users',(req,res)=>{
    const newuser=req.body;
    userlist.push(newuser);
    res.json();
})

//DELETE
server.delete("/users/:id",(req,res)=>{
    const id=req.params.id;
    //console.log(id);
    userlist=userlist.filter(item=>item.id!=id);
    
   
})
//PUT
server.put("/users/:id",(req,res)=>{
    const id=req.params.id;
    //console.log(id);
    const newemail=req.body.newemail;
    userlist.forEach(item=>{
        if(item.id==id)
        {item.email=newemail
            res.json();}
    });
    
   
})


server.listen(3000);