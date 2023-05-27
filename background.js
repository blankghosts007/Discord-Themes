// This file runs in the background.

chrome.storage.sync.get("themes", function(themes) {
  if (themes) {
    // Load the themes.
    for (var i = 0; i < themes.length; i++) {
      chrome.tabs.executeScript(null, {
        file: themes[i]
      });
    }
  }
});
