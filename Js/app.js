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

function askVirat(){
  const q=(document.getElementById("question")?.value || "").trim();
  const answer=document.getElementById("answer");
  if(!answer) return;

  if(!q){
    answer.textContent="पहले अपनी समस्या लिखें।";
    return;
  }

  const text=q.toLowerCase();

  if(text.includes("hospital") || text.includes("इलाज") || text.includes("doctor")){
    answer.textContent="🏥 Hospital & Health section खोलें।";
  }else if(text.includes("job") || text.includes("नौकरी")){
    answer.textContent="💼 Jobs & Work section खोलें।";
  }else if(text.includes("scheme") || text.includes("योजना")){
    answer.textContent="🏛️ Government Schemes section खोलें।";
  }else if(text.includes("education") || text.includes("पढ़") || text.includes("padh")){
    answer.textContent="📚 Education section खोलें।";
  }else{
    answer.textContent="🤖 VIRAT AI: आपकी समस्या के लिए सही Help category खोजें।";
  }
}
