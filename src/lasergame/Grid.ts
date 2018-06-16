import { Piece } from "./Piece"

export class Grid {
    public readonly numSpacesX: number
    public readonly numSpacesY: number
    public readonly pixelHeight: number
    public readonly pixelWidth: number
    public readonly squareHeight: number
    public readonly squareWidth: number
    public pieces: Piece[] = []
    public data: Piece[] = []

    public constructor(spec: { numSpacesX: number, numSpacesY: number, pixelWidth: number, pixelHeight: number }) {
        const { numSpacesX, numSpacesY, pixelHeight, pixelWidth } = spec
        this.numSpacesX = numSpacesX
        this.numSpacesY = numSpacesY
        this.pixelHeight = pixelHeight
        this.pixelWidth = pixelWidth
        this.squareWidth = pixelWidth / (numSpacesX + 2)
        this.squareHeight = pixelHeight / (numSpacesY + 2)
    }

    public getPiece(loc: { x: number, y: number }) {
        const { numSpacesX, data } = this
        const { x, y } = loc
        return data[y * numSpacesX + x]
    }

    public drawGrid(spec: { ctx: CanvasRenderingContext2D, offsets: { xOffset: number, yOffset: number } }) {
        const { ctx, offsets } = spec
        const { xOffset, yOffset } = offsets
        const { squareWidth, squareHeight } = this

        ctx.translate(xOffset, yOffset)

        ctx.fillStyle = "#B0B0B0"
        ctx.fillRect(0, 0, this.pixelWidth, this.pixelHeight)

        ctx.strokeStyle = "#000000"
        ctx.lineWidth = 2
        ctx.beginPath()
        for (let i = 1; i < this.numSpacesX + 2; i++) {
            const x = i * squareWidth
            ctx.moveTo(x, squareHeight)
            ctx.lineTo(x, this.pixelHeight - squareHeight)
        }
        for (let i = 1; i < this.numSpacesY + 2; i++) {
            const y = i * squareHeight
            ctx.moveTo(squareWidth, y)
            ctx.lineTo(this.pixelWidth - squareWidth, y)
        }
        ctx.stroke()

        ctx.translate(-xOffset, -yOffset)
    }
}