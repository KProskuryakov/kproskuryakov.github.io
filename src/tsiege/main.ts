import { Unit, updateUnit, inBounds } from "./unit";

window.addEventListener("load", () => {
  init();
});

function init() {
  const canvas = <HTMLCanvasElement>document.getElementById("tsiege-canvas");
  const ctx = canvas.getContext("2d")!;

  const units: Unit[] = [
    { x: 50, y: 50, w: 20, h: 20, movepoint: undefined, speed: 300 },
    { x: 400, y: 400, w: 20, h: 20, movepoint: undefined, speed: 300 },
    { x: 500, y: 100, w: 20, h: 20, movepoint: undefined, speed: 300 }
  ];

  let selected: Unit[] = [];
  let selectionBox: { x1: number, y1: number, x2: number, y2: number } | undefined = undefined;

  canvas.oncontextmenu = e => e.preventDefault();
  canvas.addEventListener("mouseup", e => {
    if (e.button == 0) { // left click
      if (selectionBox && Math.abs((selectionBox.x1 - selectionBox.x2) * (selectionBox.y1 - selectionBox.y2)) > 25) {
        selected = units.filter(u => between(u.x, selectionBox!.x1, selectionBox!.x2) && between(u.y, selectionBox!.y1, selectionBox!.y2));
      } else {
        units.forEach(unit => {
          if (inBounds(unit, e.offsetX, e.offsetY)) {
            selected = [unit];
          }
        });
      }
    } else if (e.button == 2) { // right click
      if (selected) {
        selected.forEach(s => s.movepoint = { x: e.offsetX, y: e.offsetY });
      }
    }
    selectionBox = undefined;
  });

  canvas.addEventListener("mousedown", e => {
    if (e.button == 0) {
      selectionBox = { x1: e.offsetX, y1: e.offsetY, x2: e.offsetX, y2: e.offsetY };
    }
  });

  canvas.addEventListener("mousemove", e => {
    if (e.button == 0 && selectionBox) {
      selectionBox.x2 = e.offsetX;
      selectionBox.y2 = e.offsetY;
    }
  });

  let fps = 0;
  let oldtime = 0;
  function update(time: number) {
    const dt = time - oldtime;
    oldtime = time;

    units.forEach(unit => {
      updateUnit(unit, dt);
    });

    fps = 1000 / dt;
    draw();
    requestAnimationFrame(update);
  }

  function draw() {
    const { width, height } = canvas;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    units.forEach(unit => {
      ctx.fillStyle = "red";
      ctx.fillRect(unit.x - unit.w / 2, unit.y - unit.h / 2, unit.w, unit.h);
      if (unit.movepoint) {
        ctx.strokeStyle = "green";
        ctx.strokeRect(unit.movepoint.x - 5, unit.movepoint.y - 5, 10, 10);
      }
    });

    if (selected) {
      ctx.strokeStyle = "white";
      selected.forEach(s => {
        ctx.strokeRect(s.x - s.w / 2, s.y - s.h / 2, s.w, s.h);
      })
    }

    if (selectionBox) {
      ctx.strokeStyle = "white";
      let x = Math.min(selectionBox.x1, selectionBox.x2);
      let y = Math.min(selectionBox.y1, selectionBox.y2);
      ctx.strokeRect(x, y, Math.abs(selectionBox.x1 - selectionBox.x2), Math.abs(selectionBox.y1 - selectionBox.y2));
    }

    ctx.fillStyle = "white"
    ctx.font = "1em monospace"
    ctx.fillText(`fps: ${Math.round(fps)}`, 7, 20);
  }

  requestAnimationFrame(update);
}

function between(x: number, a: number, b: number) {
  if (a > b) {
    return x >= b && x <= a;
  } else {
    return x <= b && x >= a;
  }
}