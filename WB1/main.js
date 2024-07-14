document.getElementById("wxt").focus();
let spell = new SpeechSynthesisUtterance();
spell.text ="speech text box opened";
window.speechSynthesis.speak(spell);

  
  function text_to_speech()
  {
        let speech = new SpeechSynthesisUtterance();
        speech.text = document.querySelector("textarea").value;
        speech.onend = function(event) {
          let beep = new Audio("beep.mp3");
          beep.play();
          setTimeout(()=>{window.close(); },900);
        };
      window.speechSynthesis.speak(speech);
      document.querySelector("textarea").value = "";
  }
  
  
  document.addEventListener('keydown',function(event)
  {
      if(event.key === 'ArrowRight')
      {
            document.getElementById("txt").innerText = "responcE denieD";
            navigator.clipboard.readText().then(function (text) {
            document.getElementById("txt").innerText = text;
  })}});
  
  document.addEventListener('keydown',function(event)
  {
      if(event.key === 'ArrowRight')
      {
        setTimeout(() => {
          text_to_speech();
        }, 1000);
  }});
  
  function convert(lmao)
{
  let speech = new SpeechSynthesisUtterance();
  speech.text = lmao;
  window.speechSynthesis.speak(speech);
}

  document.addEventListener('keydown' , function(event)
  {
    if(event.key === 'Delete')
    {
      let box = document.getElementById("wxt");
      navigator.clipboard.writeText(box.value);
      let speech = new SpeechSynthesisUtterance();
      speech.text = box.value;
      box.value = "";
      convert("copied text : ");
      setTimeout(()=>{
        window.speechSynthesis.speak(speech);
        speech.onend = function(event)
        {
          let end = new Audio("beep.mp3");
          end.play();
          window.close();
        }
      },700);
    }
  })

  document.addEventListener('keydown',function(event)
{
  if(event.key !== 'ArrowRight' && event.key !== "Enter")
  {
      convert(event.key);
  }
})


document.addEventListener('keydown' , function(event)
{
  if(event.key === 'Enter')
  {
    let box = document.getElementById("wxt");
    function search(query) {
      var searchUrl = 'https://www.google.com/search?q=' +"About " + encodeURIComponent(query);
      
      window.open(searchUrl, '_blank');
    }
    let speech5 = new SpeechSynthesisUtterance()
    speech5.text = "Searching for " + box.value;
    window.speechSynthesis.speak(speech5);

    setTimeout(()=>{search(box.value);},4000);
    
  }
})