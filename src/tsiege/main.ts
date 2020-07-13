import { Unit, updateUnit, inBounds } from "./unit";

window.addEventListener("load", () => {
    init();
});

function init() {
    const canvas = <HTMLCanvasElement>document.getElementById("tsiege-canvas");
    const ctx = canvas.getContext("2d")!;

    const units: Unit[] = [
        { x: 50, y: 50, w: 20, h: 20, movepoint: undefined, speed: 300 },
        { x: 400, y: 400, w: 20, h: 20, movepoint: undefined, speed: 300 },
        { x: 500, y: 100, w: 20, h: 20, movepoint: undefined, speed: 300 }
    ];

    let selected: Unit | undefined = undefined;

    canvas.oncontextmenu = (e) => e.preventDefault();
    canvas.addEventListener("mouseup", (e) => {
        if (e.button == 0) {
            units.forEach(unit => {
                if (inBounds(unit, e.offsetX, e.offsetY)) {
                    selected = unit;
                }
            });
        } else if (e.button == 2) {
            if (selected) {
                selected.movepoint = { x: e.offsetX, y: e.offsetY };
            }
        }
    });


    let fps = 0;
    let oldtime = 0;
    function update(time: number) {
        const dt = time - oldtime;
        oldtime = time;

        units.forEach(unit => {
            updateUnit(unit, dt);
        });

        fps = 1000 / dt;
        draw();
        requestAnimationFrame(update);
    }

    function draw() {
        const { width, height } = canvas;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);

        units.forEach(unit => {
            ctx.fillStyle = "red";
            ctx.fillRect(unit.x - unit.w / 2, unit.y - unit.h / 2, unit.w, unit.h);
            if (unit.movepoint) {
                ctx.strokeStyle = "green";
                ctx.strokeRect(unit.movepoint.x - 5, unit.movepoint.y - 5, 10, 10);
            }
        });

        if (selected) {
            ctx.strokeStyle = "white";
            ctx.strokeRect(selected.x - selected.w / 2, selected.y - selected.h / 2, selected.w, selected.h);
        }

        ctx.fillStyle = "white"
        ctx.font = "1.2em monospace"
        ctx.fillText(`fps: ${Math.round(fps)}`, 7, 20);
    }

    requestAnimationFrame(update);
}