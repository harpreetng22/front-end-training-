const { Router } = require('express');
const express=require('express')
const router=express.Router();


router.get('/',(req,res,next)=>{
    console.log("hi");
    res.send("user");
    next();
})

router.get('/details',(req,res,next)=>{
    console.log("How r u");
    res.send("user-details");
    next();
})

module.exports=router;