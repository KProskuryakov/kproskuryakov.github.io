import { Color } from "./Color"
import { Dir } from "./Dir"
import { Grid } from "./Grid"
import { Size } from "./Size"

type LaserObj = { x: number, y: number, dir: Dir, color: Color, size: Size }

export class Laser implements LaserObj {
    private _x: number = 0
    private _y: number = 0
    private _dir: Dir = Dir.none
    private _color: Color = Color.black
    private _size: Size = Size.medium

    constructor(spec: { origin: "new", data: LaserObj } | { origin: "edge", edge: number, grid: Grid }) {
        if (spec.origin == "new") {
            this.constructNew(spec)
        } else if (spec.origin == "edge") {
            this.constructFromEdge(spec)
        }
    }

    private constructNew(spec: { data: LaserObj }) {
        const { x, y, dir, color, size } = spec.data
        this.x = x
        this.y = y
        this.dir = dir
        this.color = color
        this.size = size
    }

    private constructFromEdge(spec: { edge: number, grid: Grid }) {
        const { edge, grid } = spec
        const { numSpacesX, numSpacesY } = grid
        this.color = Color.black
        this.size = Size.medium
        if (edge <= numSpacesX) {
            this.x = edge - 1
            this.y = 0
            this.dir = Dir.down
        } else if (edge <= numSpacesX + numSpacesY) {
            this.x = numSpacesX - 1
            this.y = edge - numSpacesX
            this.dir = Dir.left
        } else if (edge <= numSpacesX * 2 + numSpacesY) {
            this.x = numSpacesX * 2 + numSpacesY - edge
            this.y = numSpacesY - 1
            this.dir = Dir.up
        } else {
            this.x = 0
            this.y = numSpacesX * 2 + numSpacesY * 2 - edge
            this.dir = Dir.right
        }
    }
    // @ts-ignore
    draw(spec: { ctx: CanvasRenderingContext2D, grid: Grid }): void {
        throw new Error("Method not implemented.")
    }

    get next() {
        return new Laser({ origin: "new", data: this.dir.apply(this.obj) })
    }

    get copy() {
        return new Laser({ origin: "new", data: this.obj })
    }

    get obj() {
        const { x, y, dir, color, size } = this
        return { x, y, dir, color, size }
    }

    isOnEdge(grid: Grid) {
        const { x, y } = this
        const { numSpacesX, numSpacesY } = grid
        return x == -1 || y == -1 || x == numSpacesX || y == numSpacesY
    }

    public get x(): number {
        return this._x
    }
    public get y(): number {
        return this._y
    }
    public get dir(): Dir {
        return this._dir
    }
    public get color(): Color {
        return this._color
    }
    public get size(): Size {
        return this._size
    }

    public set x(value: number) {
        this._x = value
    }
    public set y(value: number) {
        this._y = value
    }
    public set dir(value: Dir) {
        this._dir = value
    }
    public set color(value: Color) {
        this._color = value
    }
    public set size(value: Size) {
        this._size = value
    }
}