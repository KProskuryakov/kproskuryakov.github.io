export default class Fps {
  private fps = 0;
  private oldTime = 0;

  public delta(newTime: number): number {
    const dt = newTime - this.oldTime;
    this.oldTime = newTime;
    this.fps = 1000 / dt;
    return dt;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "white";
    ctx.font = "1em monospace";
    ctx.fillText(`fps: ${Math.round(this.fps)}`, 7, 20);
  }
}
