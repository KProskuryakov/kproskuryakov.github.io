export const undef = <T>(original: T, possible: T | undefined): T => {
    return possible === undefined ? original : possible;
}

export const update = <T>(original: T, part: Partial<T>): T => {
    let newObj = <T>{}
    for (let key in original) {
        newObj[key] = undef(original[key], part[key])
    }
    return newObj
}