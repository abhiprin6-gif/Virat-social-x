/* Settings */

const settings={

theme:"dark",

searchEngine:"google",

homepage:"home",

font:16

};

function saveSettings(){

localStorage.setItem(

"VBX_SETTINGS",

JSON.stringify(settings)

);

}

function loadSettings(){

let s=

JSON.parse(

localStorage.getItem("VBX_SETTINGS")

);

if(s){

Object.assign(settings,s);

}

}

loadSettings();
