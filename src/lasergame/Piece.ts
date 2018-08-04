import { color_add, color_hex } from "./Color";
import { dir_clockwise, dir_counterclockwise, dir_horizontal } from "./Dir";
import { GridMetaData } from "./Grid";
import { Laser, laser_copy } from "./Laser";
import { size_larger, size_smaller } from "./Size";

export type Piece = "Forward Slash" | "Back Slash" | "Black Hole" | "Grower" | "Shrinker" | "Red Swatch" | "Green Swatch" | "Blue Swatch"

export const piece_draw = (p: Piece, ctx: CanvasRenderingContext2D, meta: GridMetaData) => {
    const { pixelWidth, pixelHeight, numSpacesX, numSpacesY } = meta
    const squareWidth = pixelWidth / (numSpacesX + 2), squareHeight = pixelHeight / (numSpacesY + 2)
    const chunkX = squareWidth / 5
    const halfChunkX = chunkX / 2
    const chunkY = squareHeight / 5
    const halfChunkY = chunkY / 2
    const chunkXThird = squareWidth / 3
    const chunkYThird = squareHeight / 3
    switch (p) {
        case "Forward Slash":
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4
            ctx.beginPath()
            ctx.moveTo(0, squareHeight)
            ctx.lineTo(squareWidth, 0)
            ctx.stroke()
            break;
        case "Back Slash":
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(squareWidth, squareHeight)
            ctx.stroke()
            break;
        case "Black Hole":
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 4
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(squareWidth, squareHeight)
            ctx.moveTo(0, squareHeight)
            ctx.lineTo(squareWidth, 0)
            ctx.stroke()
            break;
        case "Grower":
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
            break;
        case "Shrinker":
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
            break;
        case "Red Swatch":
            ctx.fillStyle = color_hex("Red")
            ctx.fillRect(chunkXThird, chunkYThird, chunkXThird, chunkYThird)
            break;
        case "Green Swatch":
            ctx.fillStyle = color_hex("Green")
            ctx.fillRect(chunkXThird, chunkYThird, chunkXThird, chunkYThird)
            break;
        case "Blue Swatch":
            ctx.fillStyle = color_hex("Blue")
            ctx.fillRect(chunkXThird, chunkYThird, chunkXThird, chunkYThird)
            break;
    }
}

export const piece_apply = (p: Piece, l: Laser): Laser => {
    const { dir, color, size } = l
    switch (p) {
        case "Forward Slash":
            return laser_copy(l, { dir: dir_horizontal(dir) ? dir_clockwise(dir) : dir_counterclockwise(dir) })
        case "Back Slash":
            return laser_copy(l, { dir: dir_horizontal(dir) ? dir_counterclockwise(dir) : dir_clockwise(dir) })
        case "Black Hole":
            return laser_copy(l, { dir: "None" })
        case "Grower":
            return laser_copy(l, { size: size_larger(size) })
        case "Shrinker":
            return laser_copy(l, { size: size_smaller(size) })
        case "Red Swatch":
            return laser_copy(l, { color: color_add(color, "Red") })
        case "Green Swatch":
            return laser_copy(l, { color: color_add(color, "Green") })
        case "Blue Swatch":
            return laser_copy(l, { color: color_add(color, "Blue") })
    }
}

const drawPlus = (ctx: CanvasRenderingContext2D, chunkX: number, chunkY: number, halfChunkX: number, halfChunkY: number) => {
    ctx.moveTo(halfChunkX, 0)
    ctx.lineTo(halfChunkX, chunkY)
    ctx.moveTo(0, halfChunkY)
    ctx.lineTo(chunkX, halfChunkY)
}

const drawMinus = (ctx: CanvasRenderingContext2D, chunkX: number, halfChunkY: number) => {
    ctx.moveTo(0, halfChunkY)
    ctx.lineTo(chunkX, halfChunkY)
}