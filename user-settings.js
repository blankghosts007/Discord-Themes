// This file is used to handle the user settings page.

var fileInput = document.getElementById("theme-file");
var resetButton = document.getElementById("reset-theme");

// This function is called when the user uploads a new theme.
fileInput.addEventListener("change", function() {
  var file = this.files[0];

  if (file) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var content = event.target.result;

      // Upload the theme.
      chrome.storage.sync.set({
        newTheme: content
      });
    };

    reader.readAsText(file);
  }
});

// This function is called when the user clicks the reset button.
resetButton.onclick = function() {
  chrome.storage.sync.set({
    newTheme: null
  });
};
