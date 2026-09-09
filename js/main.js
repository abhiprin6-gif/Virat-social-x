document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SECTION NAVIGATION
  ========================== */

  const sections = document.querySelectorAll(".section");
  const navButtons = document.querySelectorAll("[data-section]");

  function openSection(id) {
    sections.forEach(section => {
      section.classList.toggle("active", section.id === id);
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.dataset.section;
      if (section) openSection(section);
    });
  });


  /* =========================
     POST CREATION
  ========================== */

  const postText = document.getElementById("postText");
  const postBtn = document.getElementById("postBtn");
  const feed = document.getElementById("feed");

  if (postBtn && postText && feed) {

    postBtn.addEventListener("click", () => {

      const text = postText.value.trim();

      if (!text) {
        alert("पहले कुछ लिखें।");
        return;
      }

      const post = document.createElement("article");
      post.className = "card";

      const title = document.createElement("h3");
      title.textContent = "🇮🇳 VIRAT Citizen";

      const content = document.createElement("p");
      content.textContent = text;
      content.style.margin = "12px 0";
      content.style.lineHeight = "1.6";

      const actions = document.createElement("div");
      actions.style.display = "flex";
      actions.style.gap = "8px";

      const like = document.createElement("button");
      like.textContent = "❤️ Like";
      like.type = "button";

      const comment = document.createElement("button");
      comment.textContent = "💬 Comment";
      comment.type = "button";

      const share = document.createElement("button");
      share.textContent = "↗️ Share";
      share.type = "button";

      [like, comment, share].forEach(btn => {
        btn.style.border = "0";
        btn.style.borderRadius = "10px";
        btn.style.padding = "8px 12px";
        btn.style.background = "#1b243b";
        btn.style.color = "#fff";
      });

      let liked = false;

      like.addEventListener("click", () => {
        liked = !liked;
        like.textContent = liked ? "💚 Liked" : "❤️ Like";
      });

      share.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(text);
          share.textContent = "✅ Copied";
        } catch {
          share.textContent = "↗️ Share";
        }
      });

      actions.append(like, comment, share);
      post.append(title, content, actions);

      feed.prepend(post);
      postText.value = "";
    });
  }


  /* =========================
     VIRAT AI
  ========================== */

  const aiButton = document.getElementById("viratAiButton");
  const question = document.getElementById("question");
  const aiAnswer = document.getElementById("aiAnswer");

  if (aiButton && question && aiAnswer) {

    async function askAI() {

      const q = question.value.trim();

      if (!q) {
        aiAnswer.textContent = "पहले अपना सवाल लिखें।";
        return;
      }

      aiButton.disabled = true;
      aiButton.textContent = "🤖 VIRAT AI सोच रहा है...";
      aiAnswer.textContent = "⏳ जवाब तैयार किया जा रहा है...";

      try {

        const response = await fetch(
          "https://virat-ai-server.onrender.com/api/ai",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              question: q
            })
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "AI server error"
          );
        }

        aiAnswer.textContent =
          data.answer ||
          "मुझे अभी जवाब नहीं मिल पाया।";

      } catch (error) {

        console.error("VIRAT AI ERROR:", error);

        aiAnswer.textContent =
          "❌ VIRAT AI अभी उपलब्ध नहीं है।\n\n" +
          error.message;

      } finally {

        aiButton.disabled = false;
        aiButton.textContent = "🤖 Ask VIRAT AI";

      }
    }

    aiButton.addEventListener("click", askAI);

    question.addEventListener("keydown", event => {
      if (
        event.key === "Enter" &&
        !event.shiftKey
      ) {
        event.preventDefault();
        askAI();
      }
    });
  }


  /* =========================
     SEARCH
  ========================== */

  const searchBox = document.getElementById("searchBox");

  if (searchBox) {

    searchBox.addEventListener("input", () => {

      const query =
        searchBox.value.trim().toLowerCase();

      if (!query) return;

      const posts =
        document.querySelectorAll("#feed .card");

      posts.forEach(post => {

        const text =
          post.textContent.toLowerCase();

        post.style.display =
          text.includes(query)
            ? ""
            : "none";
      });

    });
  }

});


  /* HOME -> AI */
  const openAIFromHome = document.getElementById("openAIFromHome");

  if (openAIFromHome) {
    openAIFromHome.addEventListener("click", () => {
      openSection("ai");

      setTimeout(() => {
        const box = document.getElementById("question");
        if (box) box.focus();
      }, 100);
    });
  }
