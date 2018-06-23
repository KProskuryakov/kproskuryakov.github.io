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

    public drawGrid(spec: { gridCtx: CanvasRenderingContext2D, offsets: { xOffset: number, yOffset: number } }) {
        const { gridCtx, offsets } = spec
        const { xOffset, yOffset } = offsets
        const { squareWidth, squareHeight, pixelHeight, pixelWidth, numSpacesX, numSpacesY } = this

        gridCtx.translate(xOffset, yOffset)

        gridCtx.fillStyle = "#B0B0B0"
        gridCtx.fillRect(0, 0, pixelWidth, pixelHeight)

        gridCtx.strokeStyle = "#000000"
        gridCtx.lineWidth = 2
        gridCtx.beginPath()
        for (let i = 1; i < numSpacesX + 2; i++) {
            const x = i * squareWidth
            gridCtx.moveTo(x, squareHeight)
            gridCtx.lineTo(x, pixelHeight - squareHeight)
        }
        for (let i = 1; i < numSpacesY + 2; i++) {
            const y = i * squareHeight
            gridCtx.moveTo(squareWidth, y)
            gridCtx.lineTo(pixelWidth - squareWidth, y)
        }
        gridCtx.stroke()

        const halfY = squareHeight / 2
        const halfX = squareWidth / 2
        gridCtx.fillStyle = "#000000"
        gridCtx.textBaseline = "middle"
        gridCtx.font = '32px serif'

        for (let i = 1; i <= numSpacesX; i++) {
            const x = i * squareWidth + halfX
            const numText = i.toString()
            gridCtx.fillText(numText, x - gridCtx.measureText(numText).width / 2, halfY)
        }

        const farEdgeX = (numSpacesX + 1) * squareWidth + halfX

        for (let i = 1; i <= numSpacesY; i++) {
            const y = i * squareHeight + halfY
            let numText = (i + numSpacesX).toString()
            gridCtx.fillText(numText, farEdgeX - gridCtx.measureText(numText).width / 2, y)
        }

        const farEdgeY = (numSpacesY + 1) * squareHeight + halfY

        for (let i = 1; i <= numSpacesX; i++) {
            const x = i * squareWidth + halfX
            const numText = (numSpacesX * 2 + numSpacesY + 1 - i).toString()
            gridCtx.fillText(numText, x - gridCtx.measureText(numText).width / 2, farEdgeY)
        }

        for (let i = 1; i <= numSpacesY; i++) {
            const y = i * squareHeight + halfY
            const numText = (numSpacesX * 2 + numSpacesY * 2 + 1 - i).toString()
            gridCtx.fillText(numText, halfX - gridCtx.measureText(numText).width / 2, y)
        }

        gridCtx.translate(-xOffset, -yOffset)
    }
}