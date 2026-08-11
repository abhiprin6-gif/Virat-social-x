/* ==========================
   VIRAT BROWSER X
   theme.js
========================== */

const themes = {

dark:{
bg:"#0b1220",
card:"#1e293b",
text:"#ffffff",
accent:"#00c6ff"
},

light:{
bg:"#f5f7fb",
card:"#ffffff",
text:"#111111",
accent:"#0072ff"
},

neon:{
bg:"#050816",
card:"#111827",
text:"#00ffea",
accent:"#ff00ff"
},

sunset:{
bg:"#2b1055",
card:"#3d246c",
text:"#ffffff",
accent:"#ff9800"
}

};

function applyTheme(name){

const t = themes[name];

if(!t) return;

document.documentElement.style.setProperty("--bg",t.bg);
document.documentElement.style.setProperty("--card",t.card);
document.documentElement.style.setProperty("--text",t.text);
document.documentElement.style.setProperty("--accent",t.accent);

document.body.style.background=t.bg;
document.body.style.color=t.text;

localStorage.setItem("theme",name);

}

function loadTheme(){

const saved=localStorage.getItem("theme") || "dark";

applyTheme(saved);

}

function toggleTheme(){

const current=localStorage.getItem("theme") || "dark";

if(current==="dark")
applyTheme("light");

else
applyTheme("dark");

}

window.onload=loadTheme;
