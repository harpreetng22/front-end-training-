// const express=require('express')

// const greet=(req,res,next)=>{
//     console.log("hi");
//     next();
// }
// const greetmsg=(req,res,next)=>{
//     console.log("How r u");
//     next();
// }

// module.exports={greet,greetmsg};

const { Router } = require('express');
const express=require('express')
const router=express.Router();


router.get('/',(req,res,next)=>{
    console.log("hi");
    res.send("products");
    next();
})

router.get('/details',(req,res,next)=>{
    console.log("How r u");
    res.send("product-details");
    next();
})

module.exports=router;