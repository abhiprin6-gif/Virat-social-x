const data = [
  ["Emergency Help","🆘","Emergency"],
  ["Hospital & Health","🏥","Health"],
  ["Government Schemes","🏛️","Government"],
  ["Jobs & Work","💼","Jobs"],
  ["Education","📚","Education"],
  ["Legal Help","⚖️","Legal"],
  ["Business","🏪","Business"],
  ["Nearby Help","📍","Nearby"]
];

function searchHelp(){
  const q=document.getElementById("search").value.toLowerCase().trim();
  const cards=document.querySelectorAll(".help");

  cards.forEach(card=>{
    card.style.display=card.innerText.toLowerCase().includes(q) ? "" : "none";
  });
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
      location.href=`https://www.google.com/maps/search/hospital/@${lat},${lon},14z`;
    },
    ()=>alert("Location permission allow करें।")
  );
}

function askVirat(){
  const q=document.getElementById("question").value.trim();
  const answer=document.getElementById("answer");

  if(!q){
    answer.textContent="अपनी समस्या लिखें।";
    return;
  }

  const text=q.toLowerCase();

  if(text.includes("hospital")||text.includes("इलाज")||text.includes("doctor")){
    answer.textContent="🏥 Hospital & Health section खोलें या Nearby Help से hospital खोजें।";
  }else if(text.includes("job")||text.includes("नौकरी")){
    answer.textContent="💼 Jobs & Work section आपकी मदद करेगा।";
  }else if(text.includes("scheme")||text.includes("योजना")){
    answer.textContent="🏛️ Government Schemes section में अपनी जरूरत की योजना खोजें।";
  }else if(text.includes("padh")||text.includes("education")||text.includes("पढ़")){
    answer.textContent="📚 Education section में learning और scholarship resources देखें।";
  }else{
    answer.textContent="🤖 आपकी समस्या को सही Help category से जोड़ने की कोशिश की जा रही है।";
  }
}
