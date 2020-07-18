import { Building, newBuilding, drawBuilding } from "./building";
import Fps from "./fps";
import { Selector } from "./selector";
import { newUnit, Unit, updateUnit, drawUnit } from "./unit";
import { loadAssets } from "./assets";

window.addEventListener("load", () => {
  init();
});

function init() {
  const canvas = document.getElementById("tsiege-canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const images = loadAssets();

  const units: Unit[] = [
    newUnit({x: 50, y: 50, img: images.get("catgirl-forward")}),
    newUnit({x: 400, y: 400, img: images.get("catgirl-forward")}),
    newUnit({x: 500, y: 100, img: images.get("catgirl-forward")}),
  ];

  const buildings: Building[] = [
    newBuilding({ x: 100, y: 100 }),
  ];

  const selector = new Selector();
  const fps = new Fps();

  canvas.oncontextmenu = (e) => e.preventDefault();

  canvas.addEventListener("mousedown", (e) => {
    selector.onmousedown(e);
  });

  canvas.addEventListener("mousemove", (e) => {
    selector.onmousemove(e);
  });

  canvas.addEventListener("mouseup", (e) => {
    selector.onmouseup(e, units);
  });

  function update(time: number) {
    const dt = fps.delta(time);

    units.forEach((unit) => {
      updateUnit(unit, dt);
    });

    draw();
    requestAnimationFrame(update);
  }

  function draw() {
    const { width, height } = canvas;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    buildings.forEach((building) => {
      drawBuilding(building, ctx);
    });

    units.forEach((unit) => {
      drawUnit(unit, ctx);
    });

    selector.draw(ctx);
    fps.draw(ctx);
  }

  requestAnimationFrame(update);
}
