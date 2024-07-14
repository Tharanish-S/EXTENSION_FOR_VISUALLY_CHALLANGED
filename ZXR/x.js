let xax = true;
let cmd1x = false;
let cmd2x = false;
let stat = false;
let x = true;
let ox = false;
let imp = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.message == "cmd1" ){
    ox = true;
    page();
  }
  else if(message.message == "cmd2" )
  {
    link();
  }
  else if(message.message == "cmd3" )
  {
    stat = true;
    cmd3();
    cmd2x = true;
    cmd2();
    cmd1x = true;
    cmd1();
  }
  else if(message.message == "cmd4")
  {
      imp = true;
      mission()
  }
});

function cmd1()
{
document.addEventListener('mouseover', function(event) {

  var x = event.clientX;
  var y = event.clientY;

  var element = document.elementFromPoint(x, y);
  var cursorStyle = window.getComputedStyle(element).cursor;

if(cmd1x){
  if (cursorStyle === "pointer") {
    cmd1x = false;
    const speech = new SpeechSynthesisUtterance();
    if(cursorStyle === "pointer")
      speech.text = "link";
    window.speechSynthesis.speak(speech);
    setTimeout(()=>{cmd1x = true;},1750);
  }

}

});
}

function cmd2()
{
  document.addEventListener('mouseup', function (event) {
    var selectedText = window.getSelection().toString();
  
    if (selectedText && cmd2x) {
          let speech = new SpeechSynthesisUtterance();
          selectedText = selectedText.trim();
          speech.text = selectedText;
          window.speechSynthesis.speak(speech);
    }
  });  
}

function cmd3()
{
  document.addEventListener('mouseleave', function(event) {
    if(x){
      let speech = new SpeechSynthesisUtterance();
      speech.text = "outside";
      window.speechSynthesis.speak(speech);
      x = false;
      cmd3_1();
  }
  }
)};

function cmd3_1()
{
  document.addEventListener('mouseenter', function(event) {
    if(x == false){
      let speech = new SpeechSynthesisUtterance();
      speech.text = "inside";
      window.speechSynthesis.speak(speech);
      x = true  ;
      cmd3();
  }
  }
)};


function link()
{
function extractInputFromDivWithH3() { 
  const h3Element = document.querySelector('h3.bNg8Rb');
  if (h3Element) {
      const divElement = h3Element.parentElement;
      const input = divElement.innerText;
      return input.trim();
  } else {
      return 'h3 element not found';
  }
}

const divInput = extractInputFromDivWithH3();
    let speech4 = new SpeechSynthesisUtterance();
      speech4.text = divInput;
      window.speechSynthesis.speak(speech4);

}

function ll()
{
if(ox)  {
  ox = false;
  document.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'A') {
      let speech0 = new SpeechSynthesisUtterance();
      var hexx1 = event.target.href;
      var url = new URL(hexx1);
      var cleanedLink = url.origin + url.pathname;
      setTimeout(()=>{
        speech0.text = cleanedLink;
        window.speechSynthesis.speak(speech0);
      },1000);
    }
});
}
}

function page()
{
  const currentURL = window.location.href;
  let speech7 = new SpeechSynthesisUtterance();
  speech7.text = currentURL;
  window.speechSynthesis.speak(speech7);
}

function mission()
{
  if(imp)
  {
    document.addEventListener('mouseover', function(event) {
      var target = event.target;
      var id = target.id;
      if (id) {
          console.log('Element ID:', id);
      } else {
          console.log('Element has no ID.');
      }
  });
  }
}