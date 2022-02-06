//task1
// let prom=new Promise(
//     (resolve,reject)=>{
//     if(false)
//     {resolve("fulfilled");}
//     else
//    { reject("Rejected");}
// })

// prom.then(
//     (result)=>{
//     console.log(result);
// }
// ).catch(
//     (errMsg)=>{
//     console.log(errMsg);
// }
// ).finally(
//     ()=>{
//     console.log("final msg");
// }
// )


//task2:

// console.log("your exam result is: ")

// let prom=new Promise((resolve,reject)=>{  
//          let marks = Math.floor(100 * Math.random());
//          if(marks>=33)
//          {setTimeout(()=>resolve(marks),4000);}
//          else
//         { setTimeout(()=>reject(marks),4000);}
//      })
    
// async function func()
// {   
//     try{
//     let result=await prom;
//     return Promise.resolve(`Pass with ${result} Marks`) 
//     }
//     catch(result){
//         return Promise.reject(`fail with ${result} Marks`)
//     }
// }

// func().then((result)=>
// {
//     console.log(result);
// },(result1)=>
// {
//     console.warn(result1);
// })


//task3

// let data=fetch("https://jsonplaceholder.typicode.com/users")
    

//     async function func()
//     {   
//        try{
//        let result=await data;
//        return Promise.resolve( result.json()
//         )
//        }
//        catch(result){
//         return Promise.reject(`fetch failed`)
//     }
//  }
    

//  func().then((result)=>
// {
//     result.map((item)=>console.log(item['name']));
// }).catch((result1)=>
// {
//     console.warn(result1);
// })

var btn1= document.getElementById("btn1");


btn1.addEventListener("click",() => {
        var ele = document.getElementById("i");
        var tip = document.getElementById("j");
        var out = document.getElementById("outer");
        console.log(out)

        if (ele.style.display === "flex") {
            ele.style.display = "none";
            if(out.hasAttribute("id"))
            {out.removeAttribute("id");}
        } else {
            ele.style.display = "flex";
            out.setAttribute("id","out1");
        }

        if (tip.style.display === "block") {
            tip.style.display = "none";
        } else {
            tip.style.display = "block";
        }



    });

let outer=document.getElementById("out1");
outer.addEventListener("click",()=>{
    ele.style.display = "none";
    out.removeAttribute("id");
    tip.style.display = "none";
})
