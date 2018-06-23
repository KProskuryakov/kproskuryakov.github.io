enum SizeName {
    Small, Medium, Large
}

export class Size {
    private static readonly sizes = Object.freeze([
        new Size(SizeName.Small),
        new Size(SizeName.Medium),
        new Size(SizeName.Large)
    ])

    public static readonly small = Size.sizes[SizeName.Small]
    public static readonly medium = Size.sizes[SizeName.Medium]
    public static readonly large = Size.sizes[SizeName.Large]

    private readonly _name: SizeName
    private constructor(name: SizeName) {
        this._name = name
    }

    public get bigger() {
        return Size.sizes[Math.min(this._name + 1, SizeName.Large)]
    }

    public get smaller() {
        return Size.sizes[Math.max(this._name - 1, SizeName.Small)]
    }

    public get pixels() {
        return (this._name + 1) * 4
    }

    public get name() {
        return SizeName[this._name]
    }
}