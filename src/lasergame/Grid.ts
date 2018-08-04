import { Laser, laser_new, laser_next } from "./Laser";
import { Piece, piece_apply } from "./Piece";

type GridObj = { meta: GridMetaData, data: ReadonlyArray<Piece | undefined>, pieces: ReadonlyArray<Piece> }
export type Grid = Readonly<GridObj>

type GridMetaDataObj = { numSpacesX: number, numSpacesY: number, pixelHeight: number, pixelWidth: number }
export type GridMetaData = Readonly<GridMetaDataObj>

export const grid_new = (g: Grid): Grid => {
    const { meta, data, pieces } = g;
    return Object.freeze({ meta, data, pieces })
}

export const grid_edge_to_laser = (g: Grid, edge: number) => {
    const { numSpacesX, numSpacesY } = g.meta;
    if (edge <= numSpacesX) {
        return laser_new({ x: edge - 1, dir: "Down" })
    } else if (edge <= numSpacesX + numSpacesY) {
        return laser_new({ x: numSpacesX - 1, y: edge - numSpacesX, dir: "Left" })
    } else if (edge <= numSpacesX * 2 + numSpacesY) {
        return laser_new({ x: numSpacesX * 2 + numSpacesY - edge, y: numSpacesY - 1, dir: "Up" })
    } else {
        return laser_new({ y: numSpacesX * 2 + numSpacesY * 2 - edge, dir: "Right" })
    }
}

export const grid_laser_on_edge = (g: Grid, l: Laser): boolean => {
    const { x, y } = l;
    const { numSpacesX, numSpacesY } = g.meta
    if ((x === -1 || x === numSpacesX) && (y >= 0 && y < numSpacesY)) {
        return true;
    } else if ((y === -1 || y === numSpacesY) && (x >= 0 && x < numSpacesX)) {
        return true;
    } else {
        return false;
    }
}

export const grid_edge_from_laser = (g: Grid, l: Laser): number | Error => {
    const { x, y } = l;
    const { numSpacesX, numSpacesY } = g.meta
    if (y === 0) {
        return x + 1
    } else if (x === numSpacesX) {
        return numSpacesX + y + 1
    } else if (y === numSpacesY) {
        return 2 * numSpacesX + numSpacesY  - x
    } else if (x === 0) {
        return 2 * numSpacesX + 2 * numSpacesY - y
    }
    return new Error(`Laser given is not valid as an edge: ${x}, ${y}`)
}

const grid_calculate_edge_recur = (g: Grid, l: Laser): Laser | Error => {
    const next = laser_next(l)
    if (grid_laser_on_edge(g, next)) {
        return next
    }
    const {x, y} = l
    const piece = grid_get_piece(g, x, y)
    if (piece instanceof Error) {
        return piece
    } else if (piece === undefined) {
        return grid_calculate_edge_recur(g, next)
    } else {
        return piece_apply(piece, next)
    }
}

export const grid_calculate_edge = (g: Grid, edge: number): Laser | Error => grid_calculate_edge_recur(g, grid_edge_to_laser(g, edge))

export const grid_get_piece = (g: Grid, x: number, y: number): Piece | Error | undefined => {
    const { numSpacesX, numSpacesY } = g.meta
    if (x < 0 || x >= numSpacesX) {
        return new Error(`Failure when attempting to get piece from grid. X value ${x} is out of grid bounds [0, ${numSpacesX})`)
    } else if (y < 0 || y >= numSpacesY) {
        return new Error(`Failure when attempting to get piece from grid. Y value ${y} is out of grid bounds [0, ${numSpacesY})`)
    }
    return g.data[y * numSpacesX + x];
}

export const grid_draw = (g: Grid, ctx: CanvasRenderingContext2D): void => {
    const { pixelWidth, pixelHeight, numSpacesX, numSpacesY } = g.meta
    const squareWidth = pixelWidth / (numSpacesX + 2), squareHeight = pixelHeight / (numSpacesY + 2)
    ctx.fillStyle = "#B0B0B0"
    ctx.fillRect(0, 0, pixelWidth, pixelHeight)

    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 1; i < numSpacesX + 2; i++) {
        const x = i * squareWidth
        ctx.moveTo(x, squareHeight)
        ctx.lineTo(x, pixelHeight - squareHeight)
    }
    for (let i = 1; i < numSpacesY + 2; i++) {
        const y = i * squareHeight
        ctx.moveTo(squareWidth, y)
        ctx.lineTo(pixelWidth - squareWidth, y)
    }
    ctx.stroke()
}