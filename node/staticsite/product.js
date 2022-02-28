const express=require('express')

const greet=(req,res,next)=>{
    console.log(req.method);
    next();
}

module.exports=greet();