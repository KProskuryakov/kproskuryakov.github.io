import { undef } from "../Func";
import { Color, color_hex } from "./Color";
import { Dir, dir_coords, dir_opposite } from "./Dir";
import { GridMetaData } from "./Grid";
import { Size, size_pixels } from "./Size";

type LaserObj = { x: number, y: number, dir: Dir, color: Color, size: Size }
export type Laser = Readonly<LaserObj>

const defaultLaser: Laser = { x: 0, y: 0, dir: "None", color: "Black", size: "Medium" }

export const laser_copy = (o: Laser, l: Partial<Laser>): Laser => {
    return {
        x: undef(o.x, l.x),
        y: undef(o.y, l.y),
        dir: undef(o.dir, l.dir),
        color: undef(o.color, l.color),
        size: undef(o.size, l.size)
    }
}

export const laser_new = (l: Partial<Laser>) => laser_copy(defaultLaser, l)

export const laser_next = (l: Laser): Laser => {
    const { x, y, dir } = l
    const coords = dir_coords(dir)
    return laser_copy(l, { x: x + coords.x, y: y + coords.y })
}

export const laser_opposite = (l: Laser): Laser => laser_copy(l, { dir: dir_opposite(l.dir) })

export const laser_draw = (l: Laser, ctx: CanvasRenderingContext2D, meta: GridMetaData) => {
    const {pixelWidth, pixelHeight} = meta
    const halfWidth = pixelWidth / 2
    const halfHeight = pixelHeight / 2

    const {color, dir, size} = l

    ctx.strokeStyle = color_hex(color)
    ctx.lineWidth = size_pixels(size)
    
    if (dir === "Down") {
        ctx.moveTo(halfWidth, pixelHeight)
    } else if (dir === "Up") {
        ctx.moveTo(halfWidth, 0)
    } else if (dir === "Left") {
        ctx.moveTo(0, halfHeight)
    } else if (dir === "Right") {
        ctx.moveTo(pixelWidth, halfHeight)
    }
    
    ctx.lineTo(halfWidth, halfHeight)
}