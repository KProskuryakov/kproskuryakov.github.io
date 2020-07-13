export interface Unit {
    x: number;
    y: number;
    w: number;
    h: number;
    movepoint: { x: number, y: number } | undefined;
    speed: number;
}

export function updateUnit(unit: Unit, dt: number) {
    if (unit.movepoint) {
        const angle = Math.atan2(unit.movepoint.y - unit.y, unit.movepoint.x - unit.x);
        unit.x = unit.x + Math.cos(angle) * unit.speed * dt / 1000;
        unit.y = unit.y + Math.sin(angle) * unit.speed * dt / 1000;

        if (Math.abs(unit.x - unit.movepoint.x) < 5 && Math.abs(unit.y - unit.movepoint.y) < 5) {
            unit.movepoint = undefined;
        }
    }
}

export function inBounds(unit: Unit, x: number, y: number): boolean {
    return x > unit.x - unit.w / 2 && x < unit.x + unit.w / 2 && y > unit.y - unit.h / 2 && y < unit.y + unit.h / 2;
}