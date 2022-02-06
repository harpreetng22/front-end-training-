//add
var count=0;
function fun()
{
    let newEle=document.createElement("li");
    let txt=document.getElementById("newWork").value;
    console.log(txt);
    newEle.textContent=txt;
    console.log(newEle);
    let parent=document.getElementById("par");
    parent.appendChild(newEle);
    newEle=parent.lastElementChild;
    let liId= "li"+count
    newEle.setAttribute("id",liId);

    let newbtn=document.createElement("button");
    newbtn.textContent="Delete";
    newEle.appendChild(newbtn);
    newbtn=newEle.lastChild;
    newbtn.setAttribute("id",count);
    newbtn.setAttribute("type","button");
    newbtn.setAttribute("class","button1");
    newbtn.setAttribute("onClick","fun1(this.id)");
    
    newbtn=document.createElement("button");
    newbtn.textContent="update";
    newEle.appendChild(newbtn);
    newbtn=newEle.lastChild;
    newbtn.setAttribute("id",count);
    newbtn.setAttribute("type","button");
    newbtn.setAttribute("class","button1");
    newbtn.setAttribute("onClick","fun2(this.id)");
    count++;
    console.log(newEle);
}

const btn=document.getElementById("add");
btn.addEventListener("click",(button)=>
{
    button.preventDefault();
    fun();
})

//delete
fun1=(thisId)=>{
  let btnToDelete=document.getElementById(thisId);
  let listToDelete=document.getElementById("li"+thisId);
  listToDelete.removeChild(btnToDelete);
  let par=listToDelete.parentElement;
  par.removeChild(listToDelete);

}

//deleteAll
const btnAll=document.getElementById("all");
btnAll.addEventListener("click",(button)=>
{
    button.preventDefault();
    let lst=document.getElementById("par");
    while(lst.firstChild)
    {
        lst.removeChild(lst.lastChild);
    }
})

//update

// fun3=(list,text1)=>{

//     let newEle=document.createElement("li");
//     newEle.textContent=text1;
//     list.replaceChild(newEle,list.childNodes[0]);
//     console.log(list.firstChild)
// }


fun2=(thisId)=>{
    let btnToUpdate=document.getElementById(thisId);
    let listToUpdate=document.getElementById("li"+thisId);
    let txtToUpdate=listToUpdate.textContent.slice(0,-12);
    let doneBtn=document.getElementById("update");
    console.log(doneBtn)
    let input=document.getElementById("up");
    input.defaultValue =txtToUpdate;
    console.log(listToUpdate.firstChild)
    document.getElementsByClassName("update")[0].style.display="flex";

   
    doneBtn.addEventListener("click",(button)=>
    {
        button.preventDefault();
        let newEle=document.createElement("li");
        newEle.textContent=document.getElementById("up").value;
        console.log(newEle)
        listToUpdate.replaceChild(newEle,listToUpdate.firstChild);
        console.log(listToUpdate.firstChild)
        document.getElementsByClassName("update")[0].style.display="none";
        
    })

   
  }