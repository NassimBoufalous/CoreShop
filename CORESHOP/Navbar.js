export const Navbar = document.createElement("div");
import { setCss } from "./fonction.js";
import { setClass } from "./fonction.js";
import { salut } from "./fonction.js";









let img = document.createElement("img");
img.src="./logo.png";
setCss(img,"text-align","center");


let n = document.createElement("navbar");
n.classList="navbar navbar-expand-lg navbar-light bg-ligh";
n.style.backgroundColor='#758F69';




let form = document.createElement("form");
setCss(form,"text-align","right");
setCss(form,"margin-left","85%");

setClass(form,"form-inline my-2 my-lg-0");

let input = document.createElement("input");
setClass(input,"form-control mr-sm-2");
input.type="search";
input.placeholder="Rechercher";
setCss(input,"align","right");
form.appendChild(input);



let button = document.createElement("button");
setClass(button,"btn btn-outline-success my-2 my-sm-0");
button.type="submit";


let b= document.createTextNode("Rechercher");
button.appendChild(b);

setCss(button,"backgroundColor","white");
setCss(button,"float","right");

form.appendChild(button);



let a=["Collection","Limités","Support","About"];

for (let i = 0; i < a.length; i++) {
    



let l = document.createElement("li");
let el = document.createElement("a");
el.setAttribute("id",a[i]);
el.addEventListener("click",function(){
    salut(a[i]);
}, false);

setClass(el,"kinda-link");
setCss(el,"color","White");
setCss(el,"font-family","Regular");
setCss(el,"font-size","42px");
setCss(l,"margin-left","7%");
setCss(l,"margin-right","7%");











let textL=document.createTextNode(a[i]);




el.appendChild(textL);
l.appendChild(el);


n.appendChild(l);



if(i==1)
n.appendChild(img);
if(i==a.length-1)
{
setCss(l,"margin-right","1%");

}



}
Navbar.appendChild(n);
Navbar.appendChild(form);