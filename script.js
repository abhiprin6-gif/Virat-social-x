
/* =========================================
   VIRAT BROWSER X - MAIN SCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ---------- MENU ----------
  const menuBtn =
    document.getElementById("menuBtn") ||
    document.querySelector(".menu-btn") ||
    document.querySelector('button[aria-label="Menu"]') ||
    [...document.querySelectorAll("button")].find(b =>
      b.textContent.trim() === "☰"
    );

  const sidebar =
    document.getElementById("sidebar") ||
    document.querySelector(".sidebar") ||
    document.querySelector(".side-menu") ||
    document.querySelector(".menu");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      sidebar.classList.toggle("active");
      sidebar.classList.toggle("open");

      document.body.classList.toggle("menu-open");
    });
  }

  // ---------- SEARCH ----------
  const searchInput =
    document.getElementById("searchInput") ||
    document.querySelector('input[type="search"]') ||
    document.querySelector('input[placeholder*="Search"]');

  const searchBtn =
    document.getElementById("searchBtn") ||
    document.querySelector(".search-btn");

  function doSearch() {
    if (!searchInput) return;

    const value = searchInput.value.trim();

    if (!value) return;

    let url = value;

    if (
      !value.startsWith("http://") &&
      !value.startsWith("https://")
    ) {
      if (
        value.includes(".") &&
        !value.includes(" ")
      ) {
        url = "https://" + value;
      } else {
        url =
          "https://www.google.com/search?q=" +
          encodeURIComponent(value);
      }
    }

    window.location.href = url;
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", doSearch);
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        doSearch();
      }
    });
  }

  // ---------- BACK ----------
  const backBtn =
    document.getElementById("backBtn") ||
    document.querySelector(".back-btn");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.history.back();
    });
  }

  // ---------- FORWARD ----------
  const forwardBtn =
    document.getElementById("forwardBtn") ||
    document.querySelector(".forward-btn");

  if (forwardBtn) {
    forwardBtn.addEventListener("click", () => {
      window.history.forward();
    });
  }

  // ---------- RELOAD ----------
  const reloadBtn =
    document.getElementById("reloadBtn") ||
    document.querySelector(".reload-btn");

  if (reloadBtn) {
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }

  // ---------- ESC TO CLOSE MENU ----------
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar) {
      sidebar.classList.remove("active");
      sidebar.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });

  console.log("Virat Browser X Loaded Successfully 🚀");
});
