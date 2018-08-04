export type Size = "Small" | "Medium" | "Large"

export const size_pixels = (s: Size) => s === "Small" ? 4 : s === "Medium" ? 8 : s === "Large" ? 12 : 8
export const size_smaller = (s: Size) => s === "Large" ? "Medium" : "Small"
export const size_larger = (s: Size) => s === "Small" ? "Medium" : "Large"