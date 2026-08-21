"use strict";

function openExplore(type) {

  const input = document.getElementById("searchInput");
  const results = document.getElementById("results");

  const query = input.value.trim();

  if (!query) {
    input.focus();
    return;
  }

  const icons = {
    Images: "🖼️",
    Videos: "🎬",
    News: "📰",
    Web: "🌐"
  };

  const icon = icons[type] || "🌐";

  results.innerHTML = `
    <div class="explore-head">
      <div class="future-circle">${icon}</div>
      <div>
        <h2>${type}</h2>
        <p>Results for "${escapeHTML(query)}"</p>
      </div>
    </div>

    <div class="explore-grid">

      <div class="feature-card">
        <div class="icon">${icon}</div>
        <div>
          <h3>${type} Search</h3>
          <p>
            VIRAT X ${type.toLowerCase()} experience.
          </p>
        </div>
      </div>

      <div class="feature-card">
        <div class="icon">⚡</div>
        <div>
          <h3>Fast Results</h3>
          <p>Future search index integration ready.</p>
        </div>
      </div>

      <div class="feature-card">
        <div class="icon">◎</div>
        <div>
          <h3>Smart Filter</h3>
          <p>Advanced filtering architecture.</p>
        </div>
      </div>

    </div>
  `;
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}