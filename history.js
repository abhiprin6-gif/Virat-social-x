/*=====================
HISTORY MANAGER
=====================*/

let browserHistory=
JSON.parse(

localStorage.getItem("VBX_HISTORY")

)||[];

function saveHistory(url){

browserHistory.unshift({

url:url,

time:new Date().toLocaleString()

});

if(browserHistory.length>100)

browserHistory.pop();

localStorage.setItem(

"VBX_HISTORY",

JSON.stringify(browserHistory)

);

}

function showHistory(){

console.table(browserHistory);

}
