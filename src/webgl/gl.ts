export let gl: WebGL2RenderingContext;
export let canvas: HTMLCanvasElement;

export function setGL(canvasId: string) {
    const newCanvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!newCanvas) {
        throw new Error("Failed to find canvas with that id.");
    }

    const canvasGL = newCanvas.getContext("webgl2") as WebGL2RenderingContext | null;

    if (!canvasGL) {
        throw new Error("Failed to create gl context");
    }
    canvas = newCanvas;
    gl = canvasGL;

    const {width, height} = newCanvas;
    gl.viewport(0, 0, width, height);
}
