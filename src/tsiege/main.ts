import { Building, newBuilding } from "./building";
import Fps from "./fps";
import { Selector } from "./selector";
import { newUnit, Unit, updateUnit } from "./unit";

window.addEventListener("load", () => {
  init();
});

function init() {
  const canvas = document.getElementById("tsiege-canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  const units: Unit[] = [
    newUnit({x: 50, y: 50}),
    newUnit({x: 400, y: 400}),
    newUnit({x: 500, y: 100}),
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
      ctx.strokeStyle = "red";
      ctx.strokeRect(building.x - building.w / 2, building.y - building.h / 2, building.w, building.h);
      if (building.rallypoint) {
        ctx.strokeStyle = "green";
        ctx.strokeRect(building.rallypoint.x - 5, building.rallypoint.y - 5, 10, 10);
      }
    });

    units.forEach((unit) => {
      ctx.fillStyle = "red";
      ctx.fillRect(unit.x - unit.w / 2, unit.y - unit.h / 2, unit.w, unit.h);
      if (unit.movepoint) {
        ctx.strokeStyle = "green";
        ctx.strokeRect(unit.movepoint.x - 5, unit.movepoint.y - 5, 10, 10);
      }
    });

    selector.draw(ctx);
    fps.draw(ctx);
  }

  requestAnimationFrame(update);
}
