"use strict";

function saveCurrentSearch(){

  const input =
    document.getElementById("searchInput");

  const query =
    input.value.trim();

  if(!query){

    input.focus();
    return;

  }

  let saved =
    JSON.parse(
      localStorage.getItem(
        "viratBookmarks"
      ) || "[]"
    );

  if(!saved.includes(query)){

    saved.unshift(query);

  }

  localStorage.setItem(
    "viratBookmarks",
    JSON.stringify(saved.slice(0,50))
  );

  alert("☆ Search saved");

}

function copySearch(){

  const input =
    document.getElementById(
      "searchInput"
    );

  const query =
    input.value.trim();

  if(!query) return;

  if(navigator.clipboard){

    navigator.clipboard.writeText(query);

  }

}

window.saveCurrentSearch =
  saveCurrentSearch;

window.copySearch =
  copySearch;