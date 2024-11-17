let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        speech.voice = voices[0];
        voices.forEach((voice, i) => {
            voiceSelect.options[i] = new Option(voice.name, i);
        });
    }
}

window.speechSynthesis.onvoiceschanged = loadVoices;

setTimeout(loadVoices, 1000);

voiceSelect.addEventListener("change", () => {
    const selectedVoice = voices[voiceSelect.value] || voices[0];
    speech.voice = selectedVoice;
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    if (speech.text.trim() !== "") {
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text to speak.");
    }
});
