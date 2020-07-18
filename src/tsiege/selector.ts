import { Building } from "./building";
import { isUnit, Unit } from "./unit";
import { inBounds, SquareEntity } from "./entity";

export class Selector {
  private selected: Array<Unit | Building> | undefined;
  private selectionBox: { x1: number, y1: number, x2: number, y2: number } | undefined;

  public onmousedown(e: MouseEvent) {
    if (e.button === 0) { // box select
      this.selectionBox = { x1: e.offsetX, y1: e.offsetY, x2: e.offsetX, y2: e.offsetY };
    }
  }

  public onmousemove(e: MouseEvent) {
    if (e.button === 0 && this.selectionBox) { // box select
      this.selectionBox.x2 = e.offsetX;
      this.selectionBox.y2 = e.offsetY;
    }
  }

  public onmouseup(e: MouseEvent, units: Unit[]) {
    if (e.button === 0) { // left click
      this.selected = [];
      if (this.selectionBox && this.isValidSelectionBox()) {
        this.selected = units.filter((u) => this.isWithinSelectionBox(u));
      } else {
        units.forEach((unit) => {
          if (inBounds(unit, e.offsetX, e.offsetY)) {
            this.selected = [unit];
          }
        });
      }
    } else if (e.button === 2) { // right click
      if (this.selected) {
        this.selected.filter(isUnit).forEach((s) => {
          s.movepoint = { x: e.offsetX, y: e.offsetY };
        });
      }
    }
    this.selectionBox = undefined;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    if (this.selected) {
      ctx.strokeStyle = "white";
      this.selected.forEach((s) => {
        ctx.strokeRect(s.x - s.w / 2, s.y - s.h / 2, s.w, s.h);
      });
    }

    if (this.selectionBox) {
      ctx.strokeStyle = "white";
      const {x1, y1, x2, y2} = this.selectionBox;
      const x = Math.min(x1, x2);
      const y = Math.min(y1, y2);
      ctx.strokeRect(x - 1, y - 1, Math.abs(x1 - x2) + 2, Math.abs(y1 - y2) + 2);
    }
  }

  private isWithinSelectionBox(e: SquareEntity) {
    if (!this.selectionBox) {
      return false;
    }
    const { x, y } = e;
    const { x1, y1, x2, y2 } = this.selectionBox;

    return !(x > x1 && x > x2 || x < x1 && x < x2 || y > y1 && y > y2 || y < y1 && y < y2);
  }

  private isValidSelectionBox() {
    if (!this.selectionBox) {
      return false;
    }
    const { x1, y1, x2, y2 } = this.selectionBox;
    return Math.abs((x1 - x2) * (y1 - y2)) > 25;
  }
}
