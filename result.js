"use strict";

function showResultPage(query) {

  const results = document.getElementById("results");

  if (!query) return;

  results.innerHTML = `
    <div class="result-top">
      <div class="result-orb">V</div>
      <div>
        <h2>VIRAT Search</h2>
        <p>Results for "${escapeHTML(query)}"</p>
      </div>
    </div>

    <div class="result-card">
      <div class="result-icon">🌐</div>
      <div>
        <small>WEB</small>
        <h3>Search the Web</h3>
        <p>
          VIRAT X web-search architecture is ready
          for the next search-engine layer.
        </p>
      </div>
      <button class="round-icon">→</button>
    </div>

    <div class="result-card">
      <div class="result-icon">🤖</div>
      <div>
        <small>AI</small>
        <h3>Ask VIRAT AI</h3>
        <p>
          Get intelligent answers and explore
          information in a future-ready interface.
        </p>
      </div>
      <button class="round-icon">✦</button>
    </div>

    <div class="result-card">
      <div class="result-icon">🖼️</div>
      <div>
        <small>IMAGES</small>
        <h3>Explore Images</h3>
        <p>
          Visual search interface for the VIRAT ecosystem.
        </p>
      </div>
      <button class="round-icon">→</button>
    </div>
  `;
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}