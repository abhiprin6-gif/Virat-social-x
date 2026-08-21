"use strict";

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const themeBtn = document.getElementById("themeBtn");
const historyBtn = document.getElementById("historyBtn");

/* MENU */

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

/* CLOSE SIDEBAR */

document.addEventListener("click", event => {

  if (
    sidebar &&
    sidebar.classList.contains("open") &&
    !sidebar.contains(event.target) &&
    event.target !== menuBtn
  ) {
    sidebar.classList.remove("open");
  }

});

/* THEME */

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    localStorage.setItem(
      "viratTheme",
      document.body.classList.contains("light")
        ? "light"
        : "dark"
    );

  });

}

/* LOAD THEME */

if (
  localStorage.getItem("viratTheme") === "light"
) {
  document.body.classList.add("light");
}

/* HISTORY */

if (historyBtn) {

  historyBtn.addEventListener("click", () => {

    const history =
      JSON.parse(
        localStorage.getItem("viratHistory") || "[]"
      );

    if (!history.length) {
      alert("VIRAT X History अभी खाली है.");
      return;
    }

    let text = "VIRAT X SEARCH HISTORY\n\n";

    history.slice(0, 15).forEach((item, index) => {

      text +=
        `${index + 1}. ${item.query}\n` +
        `Mode: ${item.mode}\n` +
        `${item.time}\n\n`;

    });

    alert(text);

  });

}

/* SIDEBAR BUTTONS */

document.querySelectorAll("#sidebar button")
.forEach(button => {

  button.addEventListener("click", () => {

    const name = button.textContent.trim();

    if (name.includes("Home")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    sidebar.classList.remove("open");

  });

});