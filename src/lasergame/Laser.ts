import { Color } from "./Color";
import { Dir } from "./Dir";
import { Size } from "./Size";
import { Grid } from "./Grid";

export class Laser {
    public readonly x: number = 0;
    public readonly y: number = 0;
    public readonly dir: Dir = Dir.none;
    public readonly color: Color = Color.black;
    public readonly size: Size = Size.medium;

    constructor(spec: { origin: "new", data: { x: number, y: number, dir: Dir, color: Color, size: Size } } | { origin: "edge", edge: number, grid: Grid }) {
        if (spec.origin == "new") {
            const { x, y, dir, color, size } = spec.data;
            this.x = x;
            this.y = y;
            this.dir = dir;
            this.color = color;
            this.size = size;
        } else if (spec.origin == "edge") {
            const { edge, grid } = spec;
            const { width, height } = grid;
            this.color = Color.black;
            this.size = Size.medium;
            this.x = 0;
            this.y = 0;
            this.dir = Dir.none;
            if (edge <= grid.width) {
                this.x = edge - 1;
                this.dir = Dir.down;
                return
            } else if (edge <= width + height) {
                this.x = width - 1;
                this.y = edge - width;
                this.dir = Dir.left;
            } else if (edge <= width * 2 + height) {
                this.x = width * 2 + height - edge;
                this.y = height - 1;
                this.dir = Dir.up;
            } else {
                this.y = width * 2 + height * 2 - edge;
                this.dir = Dir.right;
            }
        }
    }

    get next() {
        return new Laser({ origin: "new", data: this.dir.apply(this.obj) });
    }

    get copy() {
        return new Laser({ origin: "new", data: this.obj });
    }

    get obj() {
        const { x, y, dir, color, size } = this;
        return { x, y, dir, color, size };
    }

    isOnEdge(grid: Grid) {
        const { x, y } = this;
        const { width, height } = grid;
        return x == -1 || y == -1 || x == width || y == height;
    }
}