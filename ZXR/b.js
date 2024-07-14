
chrome.commands.onCommand.addListener(function(command) {
    if (command === "cmd1") {
    
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: "cmd1" });

      });
}});

chrome.commands.onCommand.addListener(function(command) {
  if (command === "cmd2") {
  
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "cmd2" });

    });
}});

chrome.commands.onCommand.addListener(function(command) {
  if (command === "cmd3") {
  
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "cmd3" });

    });
}});

chrome.commands.onCommand.addListener(function(command) {
  if (command === "cmd4") {
  
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "cmd4" });

    });
}});

