


import { Collection } from "./Collection.js";
import { Limites } from "./Limites.js";
import { Support } from "./Support.js";
import { About } from "./About.js";



export const setCss =function setCss(l,z,a)
{
    l.style[z] = a;
}



export const setClass =function setClass(l,a)
{
    l.classList=a;
} 

  
export const salut =function salut(a)
{
   console.log(a);


    document.getElementById("divv").innerHTML="";
    switch (a) {
    
        case "Collection":
            document.getElementById("divv").appendChild(Collection);
            break;
        case "Support":
             document.getElementById("divv").appendChild(Support);
             break;
        case "Limités":    
            document.getElementById("divv").appendChild(Limites);
            break;
        case "About":
            
            document.getElementById("divv").appendChild(About);
            break;

        default :
        break;
        



    }
    ;

    

}