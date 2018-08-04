export type Color = "Black" | "Blue" | "Green" | "Cyan" | "Red" | "Magenta" | "Yellow" | "White"

enum ColorIndex {
    Black, Blue, Green, Cyan, Red, Magenta, Yellow, White
}

const ColorName: Color[] = ["Black", "Blue", "Green", "Cyan", "Red", "Magenta", "Yellow", "White"]

export const color_add = (c1: Color, c2: Color) => ColorName[ColorIndex[c1] & ColorIndex[c2]]
export const color_subtract = (c1: Color, c2: Color) => ColorName[ColorIndex[c1] & ~ColorIndex[c2]]
export const color_negate = (c: Color) => ColorName[~ColorIndex[c] & ColorIndex["White"]]
export const color_hex = (c: Color) => `#${(ColorIndex[c] & 4) == 4 ? "ff" : "00"}` +
    `${(ColorIndex[c] & 2) == 2 ? "ff" : "00"}${(ColorIndex[c] & 1) == 1 ? "ff" : "00"}`