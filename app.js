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


