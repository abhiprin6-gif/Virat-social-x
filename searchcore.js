"use strict";

function "use strict";

async function runViratSearch(){

  const input =
    document.getElementById("searchInput");

  const query =
    input.value.trim();

  if(!query){

    input.focus();

    return;
  }

  let history =
    JSON.parse(
      localStorage.getItem("viratHistory") || "[]"
    );

  history.unshift({
    query:query,
    mode:"Web",
    time:new Date().toLocaleString()
  });

  localStorage.setItem(
    "viratHistory",
    JSON.stringify(
      history.slice(0,50)
    )
  );

  if(typeof runRealSearch === "function"){

    await runRealSearch(query);

  }

}

const searchButton =
  document.getElementById("searchBtn");

if(searchButton){

  searchButton.addEventListener(
    "click",
    runViratSearch
  );

}

const searchInput =
  document.getElementById("searchInput");

if(searchInput){

  searchInput.addEventListener(
    "keydown",
    event => {

      if(event.key === "Enter"){

        runViratSearch();

      }

    }
  );

{

  const input =
    document.getElementById("searchInput");

  const query =
    input.value.trim();

  if(!query){
    input.focus();
    return;
  }

  let history =
    JSON.parse(
      localStorage.getItem("viratHistory") || "[]"
    );

  history.unshift({
    query:query,
    mode:"Web",
    time:new Date().toLocaleString()
  });

  localStorage.setItem(
    "viratHistory",
    JSON.stringify(history.slice(0,50))
  );

  if(typeof showResultPage === "function"){
    showResultPage(query);
  }

}

const mainSearch =
  document.getElementById("searchBtn");

if(mainSearch){

  mainSearch.addEventListener(
    "click",
    runViratSearch
  );

}

const mainInput =
  document.getElementById("searchInput");

if(mainInput){

  mainInput.addEventListener(
    "keydown",
    function(event){

      if(event.key === "Enter"){
        runViratSearch();
      }

    }
  );

}