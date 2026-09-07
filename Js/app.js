function searchHelp(){
  const q=(document.getElementById("search")?.value || "").toLowerCase().trim();
  document.querySelectorAll(".help").forEach(card=>{
    card.style.display=(!q || card.innerText.toLowerCase().includes(q)) ? "" : "none";
  });
}

function callNumber(number){
  window.location.href="tel:"+number;
}

function useLocation(){
  if(!navigator.geolocation){
    alert("इस device में location उपलब्ध नहीं है।");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    p=>{
      const lat=p.coords.latitude;
      const lon=p.coords.longitude;
      window.open(
        "https://www.google.com/maps/search/hospital/@"+lat+","+lon+",14z",
        "_blank"
      );
    },
    ()=>alert("Location permission allow करें।")
  );
}

async function askVirat(){
  const input = document.getElementById("question");
  const answer = document.getElementById("answer");

  if (!input || !answer) return;

  const q = input.value.trim();

  if (!q) {
    answer.textContent = "अपना सवाल लिखें।";
    return;
  }

  answer.textContent = "🤖 VIRAT AI सोच रहा है...";

  try {
    const response = await fetch("http://127.0.0.1:3000/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        question: q
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "AI server error");
    }

    answer.textContent = "🤖 VIRAT AI: " + (data.answer || "जवाब नहीं मिला।");
  } catch (error) {
    console.error("VIRAT AI:", error);
    answer.textContent =
      "❌ AI से connection नहीं हो पाया। कृपया AI server चालू है या नहीं जाँचें।";
  }
}
