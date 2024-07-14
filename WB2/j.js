let xax = true;
document.getElementById("b1").focus();

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

b1.addEventListener('focus', function(event) {
  if(xax)
  {
    xax = false;
    let speech2 = new SpeechSynthesisUtterance();
      speech2.text = "short cut tab opened";
      window.speechSynthesis.speak(speech2);
  }
    spell("Google");
});

b2.addEventListener('focus', function(event) {
    spell("YouTube");
});

b3.addEventListener('focus', function(event) {
    spell("GMail");
});

function spell(text) {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
}
