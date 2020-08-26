window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 900;
  canvas.height = 450;
  const context = canvas.getContext("2d");

  //drawImage(img, dx, dy);
  //drawImage(img, dx, dy, dw, dh);
  //drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);

  const img = new Image();
  img.src = "amsterdam.jpg";

  img.onload = () => {
    context.drawImage(img, 180, 35);

    const imageData = context.getImageData(180, 35, 500, 365);

    //////////Black and White filter/////////////

    for (i = 0; i < imageData.data.length; i += 4) {
      const avg =
        imageData.data[i] * 0.29 +
        imageData.data[i + 1] * 0.58 +
        imageData.data[i + 2] * 0.11;

      imageData.data[i] = avg; //RED
      imageData.data[i + 1] = avg; //GREEN
      imageData.data[i + 2] = avg; //BLUE
      // imageData.data[i + 3] = 200; //ALPHA
    }

    context.putImageData(imageData, 180, 35);

    //save canvas image as data URL (default: PNG)
    const imageURL = canvas.toDataURL();

    document.getElementById("canvasImage").src = imageURL;
  };
};
