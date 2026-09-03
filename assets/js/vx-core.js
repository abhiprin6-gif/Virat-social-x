(function(){
"use strict";

const base="../";

const pages=[
["Government","government.html"],
["Jobs","jobs.html"],
["Education","education.html"],
["Hospital","hospital.html"],
["Emergency","emergency.html"],
["Sports","sports.html"],
["News","news.html"],
["Legal","legal.html"],
["Business","business.html"],
["Nearby","nearby.html"],
["Browser","browser.html"],
["Calculator","calculator.html"],
["Tools","tools.html"],
["Pro Tools","tools-pro.html"],
["Extra Tools","tools-extra.html"],
["Global Search","global-search.html"],
["Favorites","favorites.html"],
["Recent","recent.html"]
];

function isRoot(){
return location.pathname.endsWith("/") ||
location.pathname.endsWith("/index.html")
}

function link(path){
return isRoot() ? "pages/"+path : path
}

function injectNav(){
if(document.querySelector(".vx-nav"))return;

let nav=document.createElement("nav");
nav.className="vx-nav";

let html='<a class="vx-brand" href="'+(isRoot()?"index.html":"../index.html")+'">VIRAT X</a>';
html+='<a href="'+(isRoot()?"index.html":"../index.html")+'">🏠 Home</a>';

pages.forEach(function(p){
html+='<a href="'+link(p[1])+'">'+p[0]+'</a>';
});

nav.innerHTML=html;
document.body.insertBefore(nav,document.body.firstChild);
}

function saveRecent(name,url){
try{
let arr=JSON.parse(localStorage.getItem("vx_recent")||"[]");
arr=arr.filter(function(x){return x.url!==url});
arr.unshift({name:name,url:url,time:Date.now()});
localStorage.setItem("vx_recent",JSON.stringify(arr.slice(0,30)));
}catch(e){}
}

function setupRecent(){
document.addEventListener("click",function(e){
let a=e.target.closest("a");
if(!a)return;
let href=a.getAttribute("href");
if(!href||href.startsWith("#")||href.startsWith("http"))return;
saveRecent((a.textContent||"Service").trim(),href);
});
}

function setupSearch(){
let input=document.querySelector(".vx-search");
if(!input)return;

input.addEventListener("input",function(){
let q=input.value.trim().toLowerCase();
document.querySelectorAll(".vx-card").forEach(function(card){
let ok=!q||(card.innerText||"").toLowerCase().includes(q);
card.style.display=ok?"":"none";
});
});
}

function setupTop(){
if(document.querySelector(".vx-top"))return;
let b=document.createElement("button");
b.className="vx-top";
b.innerHTML="↑";
b.title="Top";
b.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};
document.body.appendChild(b);
}

function setupFavorites(){
document.querySelectorAll(".vx-card").forEach(function(card){
if(card.querySelector(".vx-fav"))return;

let a=card.querySelector("a");
let title=(card.querySelector("h3")||card.querySelector("h2")||card).innerText.trim().split("\n")[0];
let url=a?a.getAttribute("href"):location.href;
let key=location.pathname+"|"+title;

let b=document.createElement("button");
b.className="vx-fav";
b.innerHTML="☆";
b.title="Favorite";

let arr;
try{arr=JSON.parse(localStorage.getItem("vx_favorites")||"[]")}catch(e){arr=[]}

if(arr.some(function(x){return x.key===key})){
b.innerHTML="★";
b.classList.add("active");
}

b.onclick=function(e){
e.preventDefault();
e.stopPropagation();

let list;
try{list=JSON.parse(localStorage.getItem("vx_favorites")||"[]")}catch(x){list=[]}

let i=list.findIndex(function(x){return x.key===key});

if(i>=0){
list.splice(i,1);
b.innerHTML="☆";
b.classList.remove("active");
}else{
list.unshift({key:key,title:title,url:url});
b.innerHTML="★";
b.classList.add("active");
}

localStorage.setItem("vx_favorites",JSON.stringify(list.slice(0,100)));
};

card.appendChild(b);
});
}

function fixBrokenInternalLinks(){
document.querySelectorAll("a[href]").forEach(function(a){
let h=a.getAttribute("href");
if(!h)return;

if(h.startsWith("http")||h.startsWith("#")||h.startsWith("mailto:")||h.startsWith("tel:"))return;

if(!isRoot() && h.startsWith("pages/")){
a.setAttribute("href",h.replace(/^pages\//,""));
}

if(isRoot() && !h.startsWith("pages/") &&
h.endsWith(".html") &&
h!=="index.html"){
a.setAttribute("href","pages/"+h);
}
});
}

function boot(){
injectNav();
fixBrokenInternalLinks();
setupRecent();
setupSearch();
setupFavorites();
setupTop();
}

if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",boot);
}else{boot();}
})();
