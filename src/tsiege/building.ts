import { SquareEntity } from "./entity";

export interface Building extends SquareEntity {
  rallypoint: { x: number, y: number } | undefined;
}

const defaultBuilding: Building = {x: 0, y: 0, w: 50, h: 50, rallypoint: undefined};

export function newBuilding(building: Partial<Building>): Building {
  return Object.assign(Object.create(defaultBuilding), building);
}

export function drawBuilding(building: Building, ctx: CanvasRenderingContext2D): void {
  ctx.strokeStyle = "red";
  ctx.strokeRect(building.x - building.w / 2, building.y - building.h / 2, building.w, building.h);
  if (building.rallypoint) {
    ctx.strokeStyle = "green";
    ctx.strokeRect(building.rallypoint.x - 5, building.rallypoint.y - 5, 10, 10);
  }
}