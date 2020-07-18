export interface SquareEntity {
    x: number;
    y: number;
    w: number;
    h: number;
}

export function inBounds(entity: SquareEntity, x: number, y: number): boolean {
    return x > entity.x - entity.w / 2 && x < entity.x + entity.w / 2 && y > entity.y - entity.h / 2 && y < entity.y + entity.h / 2;
}