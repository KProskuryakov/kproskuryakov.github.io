window.addEventListener("load", () => {
    init();
});

interface Unit {
    x: number;
    y: number;
    movepoint: { x: number, y: number } | undefined;
    speed: number;
}

function init() {
    const canvas = <HTMLCanvasElement>document.getElementById("tsiege-canvas");
    const ctx = canvas.getContext("2d")!;

    const player: Unit = { x: 50, y: 50, movepoint: undefined, speed: 300 };
    canvas.addEventListener("mouseup", (e) => {
        player.movepoint = { x: e.offsetX, y: e.offsetY }
    });

    let fps = 0;
    let oldtime = 0;
    function update(time: number) {
        const dt = time - oldtime;
        oldtime = time;
        if (player.movepoint) {
            const angle = Math.atan2(player.movepoint.y - player.y, player.movepoint.x - player.x);
            player.x = player.x + Math.cos(angle) * player.speed * dt / 1000;
            player.y = player.y + Math.sin(angle) * player.speed * dt / 1000;

            if (Math.abs(player.x - player.movepoint.x) < 5 && Math.abs(player.y - player.movepoint.y) < 5) {
                player.movepoint = undefined;
            }
        }
        fps = 1000 / dt;
        draw(ctx, canvas, player, fps);
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, player: Unit, fps: number) {
    const { width, height } = canvas;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, 20, 20);

    if (player.movepoint) {
        ctx.strokeStyle = "green";
        ctx.strokeRect(player.movepoint.x, player.movepoint.y, 10, 10);
    }

    ctx.fillStyle = "white"
    ctx.font = "1.2em monospace"
    ctx.fillText(`fps: ${Math.round(fps)}`, 7, 20);
}