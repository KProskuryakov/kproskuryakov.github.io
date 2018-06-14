const Grids = (() => {
    const create = (dimensions) => {
        const { width, height } = dimensions;
        return { width, height, data: [], pieces: [] };
    };

    const isLaserOnEdge = (grid, laser) => {
        const { x, y } = laser;
        const { width, height } = grid;
        return x == -1 || y == -1 || x == width || y == height;
    };

    const getPieceAtLoc = (grid, loc) => {
        const { width, data } = grid;
        const { x, y } = loc;
        return data[y * width + x];
    };

    return Object.freeze({ create, isLaserOnEdge, getPieceAtLoc });
})();

window.addEventListener("load", () => {
    const canvasId = "lasergame-canvas";

    const grid = Grids.create({ width: 5, height: 5 });

    const canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    const ctx = canvas.getContext("2d")!;

    function drawBackground() {
        const xSpace = canvas.width / (grid.width + 2);
        const ySpace = canvas.height / (grid.height + 2);

        ctx.fillStyle = "#B0B0B0";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        for (let i = 1; i < grid.width + 2; i++) {
            const x = i * xSpace;
            ctx.moveTo(x, ySpace);
            ctx.lineTo(x, canvas.height - ySpace);
        }
        for (let i = 1; i < grid.height + 2; i++) {
            const y = i * ySpace;
            ctx.moveTo(xSpace, y);
            ctx.lineTo(canvas.width - xSpace, y);
        }
        ctx.stroke();
    }

    drawBackground();
});