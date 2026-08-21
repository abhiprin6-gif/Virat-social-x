"use strict";

function showSearchHistory(){

  const results =
    document.getElementById("results");

  const history =
    JSON.parse(
      localStorage.getItem("viratHistory") || "[]"
    );

  if(!history.length){

    results.innerHTML = `
      <div class="history-empty">
        <div class="history-orb">◷</div>
        <h2>No Search History</h2>
        <p>Your recent VIRAT searches will appear here.</p>
      </div>
    `;

    return;
  }

  results.innerHTML = `
    <div class="history-head">

      <div>
        <h2>Recent Searches</h2>
        <p>Your latest VIRAT searches</p>
      </div>

      <button
        class="round-icon"
        onclick="clearSearchHistory()"
      >
        🗑️
      </button>

    </div>
  `;

  history.slice(0,20).forEach((item,index)=>{

    const row =
      document.createElement("div");

    row.className = "history-row";

    row.innerHTML = `
      <div class="history-icon">◷</div>

      <div class="history-info">
        <strong>${safeHistory(item.query)}</strong>
        <small>
          ${safeHistory(item.mode)}
          •
          ${safeHistory(item.time)}
        </small>
      </div>

      <button
        class="round-icon history-open"
        data-query="${safeHistory(item.query)}"
      >
        →
      </button>
    `;

    row.querySelector(".history-open")
      .addEventListener("click",()=>{

        document.getElementById(
          "searchInput"
        ).value = item.query;

        runViratSearch();

      });

    results.appendChild(row);

  });

}

function clearSearchHistory(){

  localStorage.removeItem(
    "viratHistory"
  );

  showSearchHistory();

}

function safeHistory(value){

  const div =
    document.createElement("div");

  div.textContent =
    String(value || "");

  return div.innerHTML;

}

window.showSearchHistory =
  showSearchHistory;

window.clearSearchHistory =
  clearSearchHistory;