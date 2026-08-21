"use strict";

const voiceButton = document.getElementById("voiceBtn");

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if (!SpeechRecognition) {

  voiceButton.addEventListener("click", () => {
    alert("इस browser में Voice Search उपलब्ध नहीं है।");
  });

} else {

  const recognition = new SpeechRecognition();

  recognition.lang = "hi-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    voiceButton.textContent = "🔴";
    voiceButton.title = "Listening...";
  };

  recognition.onresult = event => {

    const text =
      event.results[0][0].transcript;

    document.getElementById("searchInput").value = text;

    if (typeof searchVirat === "function") {
      searchVirat("Voice");
    }
  };

  recognition.onerror = () => {
    voiceButton.textContent = "🎙️";
  };

  recognition.onend = () => {
    voiceButton.textContent = "🎙️";
    voiceButton.title = "Voice Search";
  };

  voiceButton.addEventListener("click", () => {

    try {
      recognition.start();
    } catch (error) {
      console.log("Voice already active");
    }

  });
}