// console.log("Array");
// let array=[1,2,3,4,5,6,7,8,9,10];
// console.log(array);

// console.log("Square of Array with map");
// let newArray=array.map(a=>a*a);
// console.log(newArray);

// console.log("Even elements of array with filter");
// let newArray1=array.filter(a=>a%2==0);
// console.log(newArray1);

// console.log("Odd elements of array with filter");
// let newArray2=array.filter(a=>a%2==1);
// console.log(newArray2);

// console.log("sumof elements of array with reduce");
// let newArray3=array.reduce(fun=(a,c)=>a+c,0);
// console.log(newArray3);


// const student = {
//     name:"Harpreet",
//     age: 22,
//     "lastName":"singh"
// };
// console.log(student.name);
// console.log(student["name"]);
// console.log(student);

// let array=[1,2,3,4,5,6,7,8,9,10];
// let[x,y,z]=array;
// console.log(x,y,z);

//  const student = {
//      name:"Harpreet",
//      age: 22,

//  };

//  let {name:p}=student;
//  console.log(p);
//  //or
//  let {name,age ,q=0}=student;
//  console.log(name,age,q);
 
// add=(...args)=>args.reduce((a,c)=>a+c);
//  console.log(add(1,1,1));

//  let array1=[1,2,3];
// let array2=[...array1,4,5,6];//equivalent to [1,2,3,4,5,6]
// console.log(array2);




let prom=new Promise(function(reslove,reject){
    if(true)
    {setTimeout(function(){reslove("resloved");},5000);}
    else{
        reject("promise is rejected");
    }
})

console.log(prom)