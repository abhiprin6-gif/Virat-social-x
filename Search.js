function searchWeb(){

const input=document.getElementById("url");

if(!input)return;

let value=input.value.trim();

if(value==="")return;

if(
value.startsWith("http://")||
value.startsWith("https://")
){

window.open(value,"_blank");

}else if(value.includes(".")){

window.open("https://"+value,"_blank");

}else{

window.open(
"https://www.google.com/search?q="+
encodeURIComponent(value),
"_blank"
);

}

}

document
.getElementById("searchBtn")
?.addEventListener("click",searchWeb);

document
.getElementById("url")
?.addEventListener("keypress",e=>{

if(e.key==="Enter")searchWeb();

});