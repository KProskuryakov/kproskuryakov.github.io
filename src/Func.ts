export const undef = <T>(original: T, possible: T | undefined) => {
    return possible === undefined ? original : possible;
}