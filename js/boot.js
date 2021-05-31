import { memory } from "../crate/pkg/sandtable_bg";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function boot(width, height) {
  window.paused = false;
  fetch("https://i.imgur.com/jzwSmsC.png") // Get an image to export in
    .then((res) => res.blob())
    .then((blob) => {
      var url = URL.createObjectURL(blob);
      var img = new Image();
      img.src = url;
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((-90 * Math.PI) / 180);
        ctx.scale(-1, 1.0);
        ctx.translate(-canvas.width / 2, -canvas.height / 2);

        ctx.drawImage(img, 0, 0);
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const cellsData = new Uint8Array(
          memory.buffer,
          window.u.cells(),
          width * height * 4
        );

        window.stopboot = true;

        for (var i = 0; i < width * height * 4; i++) {
          cellsData[i] = imgData.data[i];
        }
        window.u.flush_undos();
        window.u.push_undo();
      };
    });
  await sleep(80);
}

export { sleep, boot };
