import { Grid } from "./Grid"

window.addEventListener("load", () => {
    const canvasId = "grid-canvas"
    const toolbarId = "toolbar-canvas"

    const gridCanvas = <HTMLCanvasElement>document.getElementById(canvasId)
    const gridCtx = gridCanvas.getContext("2d")!

    const toolbarCanvas = <HTMLCanvasElement>document.getElementById(toolbarId)
    const toolbarCtx = toolbarCanvas.getContext("2d")

    const grid = new Grid({ numSpacesX: 5, numSpacesY: 5, pixelWidth: gridCanvas.width, pixelHeight: gridCanvas.height })
    const offsets = { xOffset: 0, yOffset: 0 }

    grid.drawGrid({ gridCtx, offsets })
})

