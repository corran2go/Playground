var clearButton = document.getElementById("clearButton");
var eventDisplay = document.getElementById("eventDisplay");

function showEvent(ev) {
  eventDisplay.textContent += ev + ", ";
}

clearButton.addEventListener("click", function(evt) {
  eventDisplay.textContent = "";
  evt.stopPropagation();
}, false);
