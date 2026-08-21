"use strict";

async function runRealSearch(query) {

  const results = document.getElementById("results");

  results.innerHTML = `
    <div class="search-loading">
      <div class="loading-orb">V</div>
      <h2>VIRAT is searching...</h2>
      <p>Finding useful results for you</p>
    </div>
  `;

  try {

    const data = await searchEngine(query);

    if (!data || data.length === 0) {

      results.innerHTML = `
        <div class="search-empty">
          <div class="empty-orb">⌕</div>
          <h2>Search connection ready</h2>
          <p>
            VIRAT का secure search endpoint अभी connect करना बाकी है।
          </p>
          <small>
            API key browser में रखने के बजाय backend में रखी जाएगी।
          </small>
        </div>
      `;

      return;
    }

    results.innerHTML = "";

    data.forEach(item => {

      const card = document.createElement("article");

      card.className = "web-result";

      card.innerHTML = `
        <div class="web-result-icon">🌐</div>

        <div class="web-result-content">

          <a
            href="${escapeResult(item.url)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${escapeResult(item.title || "Untitled result")}
          </a>

          <small>
            ${escapeResult(item.url || "")}
          </small>

          <p>
            ${escapeResult(item.description || "")}
          </p>

        </div>
      `;

      results.appendChild(card);

    });

  } catch(error) {

    results.innerHTML = `
      <div class="search-empty">
        <div class="empty-orb">!</div>
        <h2>Search temporarily unavailable</h2>
        <p>Please try again.</p>
      </div>
    `;

    console.log(error);

  }
}

function escapeResult(value) {

  const box = document.createElement("div");

  box.textContent = String(value || "");

  return box.innerHTML;
}

window.runRealSearch = runRealSearch;