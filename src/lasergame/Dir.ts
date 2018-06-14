type DirName = "None" | "Up" | "Left" | "Right" | "Down";

export class Dir {
    private static dirs = Object.freeze({
        None: new Dir({ name: "None" }),
        Up: new Dir({ name: "Up", opposite: "Down", clockwise: "Right", counterclockwise: "Left" }),
        Left: new Dir({ name: "Left", opposite: "Right", clockwise: "Down", counterclockwise: "Up" }),
        Right: new Dir({ name: "Right", opposite: "Left", clockwise: "Up", counterclockwise: "Down" }),
        Down: new Dir({ name: "Down", opposite: "Up", clockwise: "Left", counterclockwise: "Right" })
    });

    public static readonly none = Dir.dirs.None;
    public static readonly up = Dir.dirs.Up;
    public static readonly left = Dir.dirs.Left;
    public static readonly right = Dir.dirs.Right;
    public static readonly down = Dir.dirs.Down;

    public readonly name: DirName;
    private readonly _opposite: DirName;
    private readonly _clockwise: DirName;
    private readonly _counterclockwise: DirName;

    private constructor(spec: { name: DirName, opposite?: DirName, clockwise?: DirName, counterclockwise?: DirName }) {
        const { name, opposite, clockwise, counterclockwise } = spec;
        this.name = name;
        this._opposite = opposite || "None";
        this._clockwise = clockwise || "None";
        this._counterclockwise = counterclockwise || "None";
    }

    apply<Placeable extends { x: number, y: number }>(xy: Placeable) {
        if (this.name == "Down") {
            xy.x++;
        } else if (this.name == "Up") {
            xy.x--;
        } else if (this.name == "Right") {
            xy.y++;
        } else if (this.name == "Left") {
            xy.y--;
        }
        return xy;
    }

    get opposite() {
        return Dir.dirs[this._opposite];
    }

    get clockwise() {
        return Dir.dirs[this._clockwise];
    }

    get counterclockwise() {
        return Dir.dirs[this._counterclockwise];
    }
}