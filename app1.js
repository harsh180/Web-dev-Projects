const header=document.querySelector(".head");
const button=document.querySelector(".butt");
const userlist=document.querySelector(".name");
const input=document.querySelector(".list-input");
const str=document.querySelector(".str");
const str1=document.querySelector(".str1");
const concat=document.querySelector(".concat");
concat.addEventListener('click',concating);
button.addEventListener("click",practice);
function practice(){
    const newLi=document.createElement("LI");
    const liCont=document.createTextNode(input.value);
    newLi.appendChild(liCont);
    userlist.appendChild(newLi);
}

function concating(){
    const stcont=document.createTextNode(str.value);
    const strcont=document.createTextNode(str1.value);
    const res=stcont+strcont;
    document.getElementById("demo").innerHTML=res;
    
    
}
//const body=document.getElementsByTagName("BODY")[0];
const body=document.body;
body.addEventListener('click',Myfunction);
 function Myfunction(){
    const x = document.activeElement.tagName;
    document.getElementById("demo").innerHTML=x;

}
document.writeln("hello world");
var ur=document.URL;
document.write(ur);
var color=document.querySelector("butt1");
color.addEventListener('click',ChangeColor);
function ChangeColor(){
    document.body.style.backgroundColor="yellow";
}
var time=document.lastModified;
document.getElementById("header").innerHTML=time;