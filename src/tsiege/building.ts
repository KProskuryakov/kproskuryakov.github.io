export interface Building extends SquareEntity {
  rallypoint: { x: number, y: number } | undefined;
}

const defaultBuilding: Building = {x: 0, y: 0, w: 50, h: 50, rallypoint: undefined};

export function newBuilding(building: Partial<Building>): Building {
  return Object.assign(Object.create(defaultBuilding), building);
}
