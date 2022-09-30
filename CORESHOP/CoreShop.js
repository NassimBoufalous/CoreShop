import {homecomponent} from "./homecomponent.js";
import {arrowleft, arrowright, tapis} from "./tapis.js";

function setCss (l,z,a)
{
    l.style[z] = a;
};


function setClass(l,a)
{
    l.classList=a;
};

const tapis = document.createElement ('div')

let arrowleft = document.createElement("img");
arrowleft.src="triangle.png";
setCss(arrowleft, "float", "left" );
setCss(arrowleft, "width", "30px" );
setCss(arrowleft, "transform", "rotate(180deg)" );
tapis.appendChild(arrowleft);

let arrowright = document.createElement("img");
arrowright.src="triangle.png";
setCss(arrowright, "float", "right" );
setCss(arrowright, "width", "30px" );
tapis.appendChild(arrowright);

let image1 = document.createElement("img");
image1.src="image1.jpg";
setCss(image1, "float", "center" );
setCss(image1, "height", "300px" );
setCss(image1, "border", "2px solid" );
setCss(image1, "margin", "15px" );



let image2 = document.createElement("img");
image2.src="image2.jpg";
setCss(image2, "float", "center" );
setCss(image2, "height", "300px" );
setCss(image2, "border", "2px solid" );
setCss(image2, "margin", "15px" );



let image3 = document.createElement("img");
image3.src="image3.jpg";
setCss(image3, "float", "center" );
setCss(image3, "height", "300px" );
setCss(image3, "border", "2px solid" );
setCss(image3, "margin", "15px" );


let image4 = document.createElement("img");
image4.src="image4.jpg";
setCss(image4, "float", "center" );
setCss(image4, "height", "300px" );
setCss(image4, "border", "2px solid" );
setCss(image4, "margin", "15px" );

let image5 = document.createElement("img");
image5.src="image5.jpg";
setCss(image5, "float", "center" );
setCss(image5, "height", "300px" );
setCss(image5, "border", "2px solid" );
setCss(image5, "margin", "15px" );

let cpt = 1;

function suivante(){
    if(cpt>0 && cpt<5){
    cpt++;
    }
    else{
    cpt = 1;
    }
    update2(cpt);
    console.log(cpt)
};

function precedente(){
    if(cpt>1 && cpt<5){
        cpt--;
        }
        else{
        cpt = 5;
        }
        update2(cpt);
        console.log(cpt)
    };



// let flechex = document.arrowright
arrowright.addEventListener("click", suivante)

// let flechey = document.arrowleft
arrowleft.addEventListener("click", precedente)



    let listeimg = [image1, image2, image3, image4, image5];

    function update2(cpt){
    let imgaffiche = [];
    imgaffiche.push(listeimg[cpt-1])
    imgaffiche.push(listeimg[cpt])
    imgaffiche.push(listeimg[cpt+1])
    
    for (var i = 0; i < 2; i++) {
        document.body.appendChild(imgaffiche[i]);
        i++;
    };
};

/*----------------------images------------*/




// let blocimg = document.createElement("div");
// blocimg.appendChild(image1);
// blocimg.appendChild(image2);
// blocimg.appendChild(image3);
// blocimg.appendChild(image4);

// blocimg.appendChild(arrowleft);
// blocimg.appendChild(arrowright);

//  setCss(blocimg, "margin-right", "2%")
//  setCss(blocimg, "margin-left", "2%")
//  document.body.appendChild(blocimg);

/*------------------fin d'image-----------------*/

// let listeimg = new array(image1, image2, image3, image4);

// let PositionCaroussel = new array([1], [2], [3], [4])






 
// onclick = onclick(carrous);

/*let carrous = document.createElement(); 
var carrous = new Array(image1, image2, image3, image4);
var numero = 0;

function Changecarrous(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("carrous").src = slide[numero];
}*/ 

// document.querySelector('p').parentNode.removeChild(document.querySelector);

document.body.appendChild(homecomponent)
console.log(homecomponent);

document.body.appendChild(tapis)
console.log(tapis);