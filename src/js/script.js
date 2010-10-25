(function playground() {
  var screenNode = document.getElementById("screenResolution");
  var availNode = document.getElementById("availableResolution");
  var windowNode = document.getElementById("windowResolution");

  screenNode.textContent = "screen: " + screen.width + "x" + screen.height;
  availNode.textContent = "avail: " + screen.availWidth + "x" + screen.availHeight;
  windowNode.textContent = "window: " + window.innerWidth + "x" + window.innerHeight;
})();
