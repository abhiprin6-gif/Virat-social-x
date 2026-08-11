/*=====================
DOWNLOAD MANAGER
=====================*/

let downloads=[];

function downloadFile(url){

let a=document.createElement("a");

a.href=url;

a.download="";

a.click();

downloads.push({

url:url,

time:new Date().toLocaleString()

});

console.log(downloads);

}

function openDownloads(){

console.table(downloads);

}
