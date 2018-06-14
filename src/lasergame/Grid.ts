

export class Grid {
    public readonly width: number;
    public readonly height: number;
    public 

    public constructor(spec: { width: number, height: number }) {
        const { width, height } = spec;
        this.width = width;
        this.height = height;
    }
}