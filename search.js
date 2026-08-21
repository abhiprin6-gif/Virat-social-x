"use strict";

const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

function clean(text) {
  const box = document.createElement("div");
  box.textContent = text;
  return box.innerHTML;
}

function searchVirat(mode = "Web") {

  const query = input.value.trim();

  if (!query) {
    input.focus();
    return;
  }

  let history =
    JSON.parse(localStorage.getItem("viratHistory") || "[]");

  history.unshift({
    query: query,
    mode: mode,
    time: new Date().toLocaleString()
  });

  history = history.slice(0, 50);

  localStorage.setItem(
    "viratHistory",
    JSON.stringify(history)
  );

  results.innerHTML = `
    <div class="card">
      <div>🔎</div>
      <h2>${clean(query)}</h2>
      <p>VIRAT X ${mode} Search</p>
    </div>

    <div class="card">
      <div>🌐</div>
      <h2>Web Search</h2>
      <p>
        VIRAT search system is ready.
        Next layer में real web results connect करेंगे.
      </p>
    </div>

    <div class="card">
      <div>🤖</div>
      <h2>AI Search</h2>
      <p>
        Future AI layer के लिए architecture तैयार है.
      </p>
    </div>
  `;

  window.scrollTo({
    top: results.offsetTop - 80,
    behavior: "smooth"
  });
}

searchBtn.addEventListener("click", () => {
  searchVirat("Web");
});

input.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    searchVirat("Web");
  }

});

document.querySelectorAll(".links button")
.forEach(button => {

  button.addEventListener("click", () => {

    const mode =
      button.textContent.replace(/[^\w\s]/gi, "").trim();

    searchVirat(mode);

  });

});