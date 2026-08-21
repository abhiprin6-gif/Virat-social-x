"use strict";

function getViratHistory() {

  return JSON.parse(
    localStorage.getItem("viratHistory") || "[]"
  );

}

function clearViratHistory() {

  localStorage.removeItem("viratHistory");

  alert("✓ VIRAT X History साफ हो गई।");

}

function showViratHistory() {

  const history = getViratHistory();

  if (!history.length) {
    alert("◷ अभी कोई search history नहीं है।");
    return;
  }

  let output = "";

  history.slice(0, 20).forEach((item, index) => {

    output +=
      `${index + 1}. ${item.query}\n` +
      `◉ ${item.mode}  •  ${item.time}\n\n`;

  });

  alert("◷ VIRAT X HISTORY\n\n" + output);

}

window.getViratHistory = getViratHistory;
window.clearViratHistory = clearViratHistory;
window.showViratHistory = showViratHistory;