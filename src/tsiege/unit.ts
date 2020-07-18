import { SquareEntity } from "./entity";

export interface Unit extends SquareEntity {
  movepoint: { x: number, y: number } | undefined;
  speed: number;
  img: HTMLImageElement | undefined;
}

const defaultUnit: Unit = { x: 0, y: 0, w: 20, h: 20, movepoint: undefined, speed: 300, img: undefined };

export function newUnit(unit: Partial<Unit>): Unit {
  return Object.assign(Object.create(defaultUnit), unit);
}

export function isUnit(unit: SquareEntity): unit is Unit {
  return (unit as Unit).speed !== undefined;
}

export function updateUnit(unit: Unit, dt: number): void {
  if (unit?.movepoint) {
    const angle = Math.atan2(unit.movepoint.y - unit.y, unit.movepoint.x - unit.x);
    unit.x = unit.x + Math.cos(angle) * unit.speed * dt / 1000;
    unit.y = unit.y + Math.sin(angle) * unit.speed * dt / 1000;

    if (Math.abs(unit.x - unit.movepoint.x) < 5 && Math.abs(unit.y - unit.movepoint.y) < 5) {
      unit.movepoint = undefined;
    }
  }
}

export function drawUnit(unit: Unit, ctx: CanvasRenderingContext2D): void {
  if (unit.img) {
    ctx.drawImage(unit.img, unit.x - unit.w / 2, unit.y - unit.h / 2);
  } else {
    ctx.fillStyle = "red";
    ctx.fillRect(unit.x - unit.w / 2, unit.y - unit.h / 2, unit.w, unit.h);
  }
  
  if (unit.movepoint) {
    ctx.strokeStyle = "green";
    ctx.strokeRect(unit.movepoint.x - 5, unit.movepoint.y - 5, 10, 10);
  }
}
