(function playground() {
  var screenNode = document.getElementById("screenResolution");
  var lviewportNode = document.getElementById("lviewportResolution");
  var vviewportNode = document.getElementById("vviewportResolution");

  function displayResolutions() {
    screenNode.textContent = "screen: " + screen.width + "x" + screen.height;
    lviewportNode.textContent = "layout viewport: " + document.documentElement.clientWidth + "x" + document.documentElement.clientHeight;
    vviewportNode.textContent = "visual viewport: " + window.innerWidth + "x" + window.innerHeight;
  }

  addEventListener("resize", function (ev) {
    displayResolutions();
  }, false );

  displayResolutions();
})();
