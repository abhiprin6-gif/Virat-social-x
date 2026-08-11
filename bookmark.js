/*=====================
BOOKMARK MANAGER
=====================*/

let bookmarks=
JSON.parse(
localStorage.getItem("VBX_BOOKMARKS")
)||[];

function addBookmark(){

let url=
document.getElementById("url").value;

if(url=="")return;

bookmarks.push({

title:url,

url:url,

date:new Date().toLocaleString()

});

localStorage.setItem(

"VBX_BOOKMARKS",

JSON.stringify(bookmarks)

);

alert("Bookmark Saved");

}

function showBookmarks(){

console.table(bookmarks);

}
