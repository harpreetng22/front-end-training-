var par=document.getElementById("parent");
console.log(par);
var newEle=document.createElement("li");
newEle.textContent="newfirstChild";
par.replaceChild(newEle,par.firstElementChild);
par.removeChild(par.lastElementChild);


var newEle=document.createElement("li");
newEle.textContent="appended Child";
par.appendChild(newEle);

var newEle=document.createElement("li");
newEle.textContent="inserted before second Child";
// par.insertBefore(newEle,par.firstElementChild.nextElementSibling);
par.insertBefore(newEle,par.children[1]);

console.log(par.childNodes);

var newEle=document.createElement("li");
newEle.textContent="inserted after second Child";
insertAfter(newEle,par.children[2]);

function insertAfter(newEle, positionEle) {
   positionEle.parentNode.insertBefore(newEle,positionEle.nextElementSibling);
}

par.setAttribute("class","list");
console.log(par.hasAttribute("class"));
console.log(par.getAttribute("class"));
par.classList.add("newclass");
