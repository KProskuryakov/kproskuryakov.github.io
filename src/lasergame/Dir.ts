export type Dir = "None" | "Up" | "Left" | "Right" | "Down";

const oppositeMap: {[key: string]: Dir} = {None: "None", Up: "Down", Left: "Right", Right: "Left", Down: "Up"}
const clockwiseMap: {[key: string]: Dir} = {None: "None", Up: "Right", Left: "Up", Right: "Down", Down: "Left"}
const counterclockwiseMap: {[key: string]: Dir} = {None: "None", Up: "Left", Left: "Down", Right: "Up", Down: "Right"}
const coords: {[key: string]: {x: -1 | 0 | 1, y: -1 | 0 | 1}} = {None: {x: 0, y: 0}, Up: {x: 0, y: -1}, Left: {x: -1, y: 0}, Right: {x: 1, y: 0}, Down: {x: 0, y: 1}}

export const dir_coords = (d: Dir) => coords[d]
export const dir_opposite = (d: Dir) => oppositeMap[d]
export const dir_clockwise = (d: Dir) => clockwiseMap[d]
export const dir_counterclockwise = (d: Dir) => counterclockwiseMap[d]
export const dir_horizontal = (d: Dir) => d === "Left" || d === "Right" ? true : false
export const dir_vertical = (d: Dir) => d === "Up" || d === "Down" ? true : false
export const dir_none = (d: Dir) => d === "None" ? true : false