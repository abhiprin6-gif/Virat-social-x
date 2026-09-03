(function(){
"use strict";

function root(){
return location.pathname.endsWith("/")||location.pathname.endsWith("/index.html");
}

function p(x){
return root()?"pages/"+x:x;
}

function makeDashboard(){
if(!root()||document.querySelector(".vx-dashboard"))return;

var box=document.createElement("section");
box.className="vx-dashboard";
box.innerHTML=
'<div class="vx-dash-head">'+
'<div><h1>VIRAT SOCIAL X</h1><p>Smart Service & Technology Hub</p></div>'+
'<input id="vxDashSearch" placeholder="🔍 Search service...">'+
'</div>'+
'<div class="vx-dash-grid">'+

'<a class="vx-dash-card" href="pages/government.html"><b>🏛️</b><strong>Government</strong><small>Government services & schemes</small></a>'+
'<a class="vx-dash-card" href="pages/jobs.html"><b>💼</b><strong>Jobs</strong><small>Jobs, exams & careers</small></a>'+
'<a class="vx-dash-card" href="pages/education.html"><b>🎓</b><strong>Education</strong><small>Study & learning resources</small></a>'+
'<a class="vx-dash-card" href="pages/hospital.html"><b>🏥</b><strong>Health</strong><small>Health & medical services</small></a>'+
'<a class="vx-dash-card" href="pages/emergency.html"><b>🚨</b><strong>Emergency</strong><small>Emergency help numbers</small></a>'+
'<a class="vx-dash-card" href="pages/sports.html"><b>⚽</b><strong>Sports</strong><small>Sports news & websites</small></a>'+
'<a class="vx-dash-card" href="pages/news.html"><b>📰</b><strong>News</strong><small>Latest information sources</small></a>'+
'<a class="vx-dash-card" href="pages/legal.html"><b>⚖️</b><strong>Legal</strong><small>Law & court services</small></a>'+
'<a class="vx-dash-card" href="pages/business.html"><b>📈</b><strong>Business</strong><small>Business & startup services</small></a>'+
'<a class="vx-dash-card" href="pages/nearby.html"><b>📍</b><strong>Nearby</strong><small>Maps & nearby services</small></a>'+
'<a class="vx-dash-card" href="pages/browser.html"><b>🌐</b><strong>Browser</strong><small>Quick web access</small></a>'+
'<a class="vx-dash-card" href="pages/calculator.html"><b>🧮</b><strong>Calculator</strong><small>Useful calculations</small></a>'+
'<a class="vx-dash-card" href="pages/tools.html"><b>🧰</b><strong>All Tools</strong><small>Useful online tools</small></a>'+
'<a class="vx-dash-card" href="pages/tools-pro.html"><b>⚡</b><strong>Pro Tools</strong><small>Advanced tools</small></a>'+
'<a class="vx-dash-card" href="pages/tools-extra.html"><b>🚀</b><strong>Extra Tools</strong><small>More powerful utilities</small></a>'+
'<a class="vx-dash-card" href="pages/global-search.html"><b>🔎</b><strong>Global Search</strong><small>Search the whole hub</small></a>'+
'<a class="vx-dash-card" href="pages/favorites.html"><b>⭐</b><strong>Favorites</strong><small>Your saved services</small></a>'+
'<a class="vx-dash-card" href="pages/recent.html"><b>🕘</b><strong>Recent</strong><small>Recently opened services</small></a>'+

'</div>';

document.body.insertBefore(box,document.querySelector(".vx-nav")?.nextSibling||document.body.firstChild);

var input=box.querySelector("#vxDashSearch");

input.addEventListener("input",function(){
var q=input.value.toLowerCase().trim();

box.querySelectorAll(".vx-dash-card").forEach(function(card){
card.style.display=(!q||card.innerText.toLowerCase().includes(q))?"flex":"none";
});
});
}

function style(){
if(document.querySelector("#vx-dashboard-style"))return;

var s=document.createElement("style");
s.id="vx-dashboard-style";
s.textContent=
'.vx-dashboard{width:min(1200px,94%);margin:20px auto 40px}'+
'.vx-dash-head{padding:25px;border:1px solid #263852;border-radius:24px;background:linear-gradient(145deg,#101e32,#0b1728);margin-bottom:18px}'+
'.vx-dash-head h1{font-size:clamp(25px,6vw,42px);margin-bottom:6px}'+
'.vx-dash-head p{color:#94a3b8;margin-bottom:18px}'+
'.vx-dash-head input{width:100%;padding:15px;border-radius:14px;border:1px solid #334155;background:#07111f;color:white;outline:none}'+
'.vx-dash-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px}'+
'.vx-dash-card{min-height:145px;padding:20px;border:1px solid #263852;border-radius:20px;background:#0d1a2c;display:flex;flex-direction:column;justify-content:center;transition:.2s}'+
'.vx-dash-card:hover{transform:translateY(-4px);border-color:#3b82f6}'+
'.vx-dash-card b{font-size:30px;margin-bottom:10px}'+
'.vx-dash-card strong{font-size:17px;margin-bottom:5px}'+
'.vx-dash-card small{color:#94a3b8;line-height:1.4}'+
'@media(max-width:600px){.vx-dash-grid{grid-template-columns:repeat(2,1fr)}.vx-dash-card{min-height:135px;padding:15px}.vx-dash-card b{font-size:25px}}';

document.head.appendChild(s);
}

function boot(){
style();
makeDashboard();
}

if(document.readyState==="loading"){
document.addEventListener("DOMContentLoaded",boot);
}else boot();

})();
