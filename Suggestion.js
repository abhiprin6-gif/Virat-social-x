"use strict";

const searchBox = document.querySelector(".search");
const searchInput = document.getElementById("searchInput");

const suggestionData = [
  "Latest technology",
  "Artificial intelligence",
  "Future technology 2050",
  "Best websites",
  "Space exploration",
  "Computer science",
  "World news",
  "Web development"
];

const suggestionPanel = document.createElement("div");
suggestionPanel.className = "suggestions";
searchBox.appendChild(suggestionPanel);

function showSuggestions(value) {

  suggestionPanel.innerHTML = "";

  if (!value.trim()) {
    suggestionPanel.classList.remove("show");
    return;
  }

  const matches = suggestionData.filter(item =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  matches.forEach(item => {

    const row = document.createElement("button");

    row.innerHTML = `
      <span class="suggestion-icon">⌕</span>
      <span>${item}</span>
    `;

    row.addEventListener("click", () => {
      searchInput.value = item;
      suggestionPanel.classList.remove("show");

      if (typeof searchVirat === "function") {
        searchVirat("Web");
      }
    });

    suggestionPanel.appendChild(row);
  });

  if (matches.length) {
    suggestionPanel.classList.add("show");
  }
}

searchInput.addEventListener("input", () => {
  showSuggestions(searchInput.value);
});

searchInput.addEventListener("focus", () => {
  showSuggestions(searchInput.value);
});

document.addEventListener("click", event => {

  if (!searchBox.contains(event.target)) {
    suggestionPanel.classList.remove("show");
  }

});