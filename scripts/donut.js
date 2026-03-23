/*
Source adapted from:
https://github.com/patrickoliveras/js-text-donut/blob/master/main.js
*/
function mountDonut() {
  const canvas = document.querySelector("#donut-frame");

  if (!canvas) {
    return;
  }

  const isSmallViewport = window.innerWidth < 768;
  const canvasWidth = isSmallViewport ? 54 : 80;
  const canvasHeight = isSmallViewport ? 22 : 24;
  const canvasArea = canvasHeight * canvasWidth;
  const yOffset = Math.floor(canvasHeight / 2);
  const xOffset = Math.floor(canvasWidth / 2);
  const innerRadius = 2;
  const r1Points = 90;
  const r2Points = 314;
  const fov = 5;
  const scale = isSmallViewport ? 20 : 30;
  let angleA = 0;
  let angleB = 0;
  const shades = ".,-~:;=!*#$@".split("");
  let intervalId = null;

  const render = () => {
    const charBuffer = Array(canvasArea).fill(" ");
    const zBuffer = Array(canvasArea).fill(0);

    for (let j = 0; j < 6.28; j += 6.28 / r1Points) {
      for (let i = 0; i < 6.28; i += 6.28 / r2Points) {
        const c = Math.sin(i);
        const d = Math.cos(j);
        const e = Math.sin(angleA);
        const f = Math.sin(j);
        const g = Math.cos(angleA);
        const h = d + innerRadius;
        const depth = 1 / (c * h * e + f * g + fov);
        const l = Math.cos(i);
        const m = Math.cos(angleB);
        const n = Math.sin(angleB);
        const t = c * h * g - f * e;
        const x = (xOffset + scale * depth * (l * h * m - t * n)) << 0;
        const y = (yOffset + (scale / 2) * depth * (l * h * n + t * m)) << 0;
        const offset = (x + canvasWidth * y) << 0;
        const shadeConstant = (((shades.length + 1) * 2) / 3) << 0;
        const shadeIndex =
          (shadeConstant *
            ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n)) <<
          0;

        if (canvasHeight > y && y > 0 && x > 0 && canvasWidth > x && depth > zBuffer[offset]) {
          zBuffer[offset] = depth;
          charBuffer[offset] = shades[shadeIndex > 0 ? shadeIndex : 0];
        }
      }
    }

    let html = "";
    let line = [];

    for (let k = 0; k < canvasArea + 1; k += 1) {
      if (k % canvasWidth) {
        line.push(charBuffer[k]);
      } else {
        html += line.join("") + "<br />";
        line = [];
      }

      angleA += 0.00004;
      angleB += 0.00002;
    }

    canvas.innerHTML = html;
  };

  render();
  intervalId = window.setInterval(render, 17);

  window.addEventListener("beforeunload", () => {
    if (intervalId) {
      window.clearInterval(intervalId);
    }
  });

  window.addEventListener("resize", () => window.location.reload());
}
