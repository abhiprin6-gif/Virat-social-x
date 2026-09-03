(function(){

function createWallpaper(){

if(document.querySelector(".vx-particles"))return;

var p=document.createElement("div");
p.className="vx-particles";

for(var i=0;i<45;i++){

var x=document.createElement("span");
x.className="vx-particle";

x.style.left=(Math.random()*100)+"%";
x.style.animationDuration=(5+Math.random()*9)+"s";
x.style.animationDelay=(Math.random()*8)+"s";
x.style.width=(1+Math.random()*4)+"px";
x.style.height=x.style.width;

p.appendChild(x);
}

document.body.appendChild(p);
}

function createLogo(){

if(document.querySelector(".vx-logo"))return;

var nav=document.querySelector(".vx-nav");

if(nav){

var logo=document.createElement("div");
logo.className="vx-brand-logo";

logo.innerHTML=
'<div class="vx-logo">V</div>'+
'<span>VIRAT X</span>';

nav.insertBefore(logo,nav.firstChild);
}
}

function start(){
createWallpaper();
createLogo();
}

if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",start);
}else{
start();
}

})();
