var btn1= document.getElementById("btn1");
var btn2= document.getElementById("btn2");
var btn3= document.getElementById("btn3");
var ele=document.getElementById("flx");
btn1.addEventListener("click",function(){
    ele.setAttribute("class","bg1");
});
btn2.addEventListener("click",function(){
    ele.setAttribute("class","bg2");
});
btn3.addEventListener("click",function(){
    ele.setAttribute("class","bg3");
});