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

// This function is called when the user uploads a new theme.
chrome.storage.onChanged.addListener(function(changes) {
  if (changes.themes) {
    // Load the new theme.
    chrome.tabs.executeScript(null, {
      file: changes.themes.newTheme
    });
  }
});
