(function playground() {

  function onResize(event) {
    if (window.console) {
      console.log("onResize() event=" + event);
    }
  }

  addEventListener("resize", function (event) {
    onResize(event);
  }, false );
})();
