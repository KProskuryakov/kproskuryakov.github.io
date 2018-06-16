import { Color } from "./Color"
import { Dir } from "./Dir"
import { Laser } from "./Laser"
import { Grid } from "./Grid"


interface PieceData {
    name: string
    apply: (laser: Laser) => void
    draw: (spec: { ctx: CanvasRenderingContext2D, grid: Grid }) => void
}

type PieceDataList = {
    forwardSlash: PieceData
    backSlash: PieceData
    blackHole: PieceData
    grower: PieceData
    shrinker: PieceData
    redSwatch: PieceData
    greenSwatch: PieceData
    blueSwatch: PieceData
}
const pieceData: PieceDataList = {
    forwardSlash: {
        name: "Forward Slash",
        apply(laser) {
            let { dir } = laser;
            if (dir == Dir.left) {
                dir = Dir.down
            } else if (dir == Dir.down) {
                dir = Dir.left
            } else if (dir == Dir.right) {
                dir = Dir.up
            } else if (dir = Dir.up) {
                dir = Dir.right
            }
            laser.dir = dir
        },
        draw(spec) {
            const { ctx, grid } = spec
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4
            ctx.beginPath()
            ctx.moveTo(0, grid.squareHeight)
            ctx.lineTo(grid.squareWidth, 0)
            ctx.stroke()
        }
    },
    backSlash: {
        name: "Back Slash",
        apply(laser) {
            let { dir } = laser;
            if (dir == Dir.left) {
                dir = Dir.up
            } else if (dir == Dir.down) {
                dir = Dir.right
            } else if (dir == Dir.right) {
                dir = Dir.down
            } else if (dir = Dir.up) {
                dir = Dir.left
            }
            laser.dir = dir
        },
        draw(spec) {
            const { ctx, grid } = spec
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(grid.squareWidth, grid.squareHeight)
            ctx.stroke()
        }
    },
    blackHole: {
        name: "Black Hole",
        apply(laser) {
            laser.dir = Dir.none
        },
        draw(spec) {
            const { ctx, grid } = spec
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(grid.squareWidth, grid.squareHeight)
            ctx.moveTo(0, grid.squareHeight)
            ctx.lineTo(grid.squareWidth, 0)
            ctx.stroke()
        }
    },
    grower: {
        name: "Grower",
        apply(laser) {
            laser.size = laser.size.bigger
        },
        draw(spec) {
            const { ctx, grid } = spec

            const chunkX = grid.squareWidth / 5
            const halfChunkX = chunkX / 2
            const chunkY = grid.squareHeight / 5
            const halfChunkY = chunkY / 2

            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4

            ctx.beginPath()

            ctx.translate(chunkX, chunkY)
            drawPlus(ctx, chunkX, chunkY, halfChunkX, halfChunkY)

            ctx.translate(0, chunkY * 2)
            drawPlus(ctx, chunkX, chunkY, halfChunkX, halfChunkY)

            ctx.translate(chunkX * 2, 0)
            drawPlus(ctx, chunkX, chunkY, halfChunkX, halfChunkY)

            ctx.translate(0, -chunkY * 2)
            drawPlus(ctx, chunkX, chunkY, halfChunkX, halfChunkY)

            ctx.stroke()
        }
    },
    shrinker: {
        name: "Shrinker",
        apply(laser) {
            laser.size = laser.size.smaller
        },
        draw(spec) {
            const { ctx, grid } = spec

            const chunkX = grid.squareWidth / 5
            const chunkY = grid.squareHeight / 5
            const halfChunkY = chunkY / 2

            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4

            ctx.beginPath()

            ctx.translate(chunkX, chunkY)
            drawMinus(ctx, chunkX, halfChunkY)

            ctx.translate(0, chunkY * 2)
            drawMinus(ctx, chunkX, halfChunkY)

            ctx.translate(chunkX * 2, 0)
            drawMinus(ctx, chunkX, halfChunkY)

            ctx.translate(0, -chunkY * 2)
            drawMinus(ctx, chunkX, halfChunkY)

            ctx.stroke()
        }
    },
    redSwatch: {
        name: "Red Swatch",
        apply(laser) {
            Color.red.addTo(laser)
        },
        draw(spec) {
            const {ctx, grid} = spec
            ctx.fillStyle = Color.red.hex
            const chunkX = grid.squareWidth / 3
            const chunkY = grid.squareHeight / 3
            ctx.fillRect(chunkX, chunkY, chunkX, chunkY)
        }
    },
    greenSwatch: {
        name: "Green Swatch",
        apply(laser) {
            Color.green.addTo(laser)
        },
        draw(spec) {
            const {ctx, grid} = spec
            ctx.fillStyle = Color.green.hex
            const chunkX = grid.squareWidth / 3
            const chunkY = grid.squareHeight / 3
            ctx.fillRect(chunkX, chunkY, chunkX, chunkY)
        }
    },
    blueSwatch: {
        name: "Blue Swatch",
        apply(laser) {
            Color.blue.addTo(laser)
        },
        draw(spec) {
            const {ctx, grid} = spec
            ctx.fillStyle = Color.blue.hex
            const chunkX = grid.squareWidth / 3
            const chunkY = grid.squareHeight / 3
            ctx.fillRect(chunkX, chunkY, chunkX, chunkY)
        }
    }
};

export class Piece {
    private _x: number = 0
    private _y: number = 0
    private _pieceData: PieceData
    private _placed: Boolean = false

    public constructor(spec: { pieceDataName: keyof PieceDataList }) {
        const { pieceDataName } = spec;
        this._pieceData = pieceData[pieceDataName]
    }

    public apply(laser: Laser) {
        this._pieceData.apply(laser)
    }

    public draw(spec: { ctx: CanvasRenderingContext2D, grid: Grid }) {
        this._pieceData.draw(spec)
    }

    public get x() {
        return this._x
    }
    public get y() {
        return this._y
    }
    public get name() {
        return this._pieceData.name
    }
    public get placed() {
        return this._placed
    }
}

function drawPlus(ctx: CanvasRenderingContext2D, chunkX: number, chunkY: number, halfChunkX: number, halfChunkY: number) {
    ctx.moveTo(halfChunkX, 0)
    ctx.lineTo(halfChunkX, chunkY)
    ctx.moveTo(0, halfChunkY)
    ctx.lineTo(chunkX, halfChunkY)
}

function drawMinus(ctx: CanvasRenderingContext2D, chunkX: number, halfChunkY: number) {
    ctx.moveTo(0, halfChunkY)
    ctx.lineTo(chunkX, halfChunkY)
}