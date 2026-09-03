(function(){
"use strict";

document.addEventListener("DOMContentLoaded",function(){

document.querySelectorAll("a[href]").forEach(function(a){

var h=a.getAttribute("href");
if(!h)return;

if(
h.startsWith("http://")||
h.startsWith("https://")||
h.startsWith("#")||
h.startsWith("mailto:")||
h.startsWith("tel:")
)return;

a.addEventListener("click",function(e){

var target=a.getAttribute("href");

if(!target||target==="#"||target==="javascript:void(0)")return;

});
});

});
})();
