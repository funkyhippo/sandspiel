import { Species } from "../crate/pkg/sandtable";
import { memory } from "../crate/pkg/sandtable_bg";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function boot(width, height) {
  window.paused = false;
  fetch("https://i.imgur.com/rzl9R6A.png") // Get an image to export in
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

        for (var i = 0; i < width * height * 4; i += 4) {
          let num = 0;
          for (let j = 0; j < 4; j++) {
            num += imgData.data[i + j] << ((3 - j) * 2);
          }
          let species = undefined;
          if (num === 0) {
            continue;
          } else if (num > 0 && num < 2500) {
            species = Species.Fire;
          } else if (num >= 2500 && num < 5000) {
            species = Species.Acid;
          } else if (num >= 5000 && num < 10000) {
            species = Species.Oil;
          } else if (num >= 10000 && num < 15000) {
            species = Species.Mite;
          } else if (num >= 15000 && num < 20000) {
            species = Species.Dust;
          } else if (num >= 20000 && num < 21000) {
            species = Species.Plant;
          } else if (num >= 21000 && num < 24000) {
            species = Species.Wood;
          } else {
            species = Species.Lava;
          }
          cellsData[i] = species;
        }
        window.u.flush_undos();
        window.u.push_undo();
      };
    });
  await sleep(80);
}

export { sleep, boot };
