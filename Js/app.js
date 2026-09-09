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


