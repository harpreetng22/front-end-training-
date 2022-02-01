var par=document.getElementById("parent");
console.log(par);
var newEle=document.createElement("li");
newEle.textContent="newChild";
par.replaceChild(newEle,par.firstElementChild)