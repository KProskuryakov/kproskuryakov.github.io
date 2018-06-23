enum ColorName {
    Black, Blue, Green, Cyan, Red, Magenta, Yellow, White
}

export class Color {
    private static readonly colors = Object.freeze([
        new Color(ColorName.Black),
        new Color(ColorName.Blue),
        new Color(ColorName.Green),
        new Color(ColorName.Cyan),
        new Color(ColorName.Red),
        new Color(ColorName.Magenta),
        new Color(ColorName.Yellow),
        new Color(ColorName.White),
    ])

    public static readonly black = Color.colors[ColorName.Black]
    public static readonly blue = Color.colors[ColorName.Black]
    public static readonly green = Color.colors[ColorName.Black]
    public static readonly cyan = Color.colors[ColorName.Black]
    public static readonly red = Color.colors[ColorName.Black]
    public static readonly magenta = Color.colors[ColorName.Black]
    public static readonly yellow = Color.colors[ColorName.Black]
    public static readonly white = Color.colors[ColorName.Black]

    public readonly hex: string
    private readonly _name: ColorName

    private constructor(name: ColorName) {
        this._name = name
        const r = (name & 4) == 4 ? "ff" : "00"
        const g = (name & 2) == 2 ? "ff" : "00"
        const b = (name & 1) == 1 ? "ff" : "00"
        this.hex = `#${r}${g}${b}`
    }

    public addTo<Colorable extends { color: Color}>(c: Colorable) {
        c.color = Color.colors[this._name & c.color._name]
        return c
    }

    public subtractFrom<Colorable extends { color: Color}>(c: Colorable) {
        c.color = Color.colors[this._name & ~c.color._name]
        return c
    }

    public get negate() {
        return Color.colors[~this._name & ColorName.White]
    }

    public get name() {
        return ColorName[this._name]
    }
}