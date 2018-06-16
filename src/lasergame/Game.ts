import { Grid } from "./Grid"

window.addEventListener("load", () => {
    const canvasId = "lasergame-canvas"

    const canvas = <HTMLCanvasElement>document.getElementById(canvasId)
    const ctx = canvas.getContext("2d")!

    const grid = new Grid({ numSpacesX: 5, numSpacesY: 5, pixelWidth: canvas.width, pixelHeight: canvas.height })
    const offsets = { xOffset: 0, yOffset: 0 }

    grid.drawGrid({ ctx, offsets })
});