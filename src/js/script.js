(function playground() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var canvasData = context.createImageData(canvas.width, canvas.height);

  function setPixel(imageData, x, y, r, g, b, a) {
    var index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
  }

  for (var x = 0; x < canvasData.width; x++) {
    for (var y = 0; y < canvasData.height; y++) {
	  setPixel(canvasData, x, y, parseInt(Math.random() * 256), parseInt(Math.random() * 256), parseInt(Math.random() * 256), 0xff);
	  //console.log("put pixel");
	}
  }
  context.putImageData(canvasData, 0, 0);
})();
