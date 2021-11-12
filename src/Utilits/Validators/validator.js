

export const required = value => {
    if(value) return undefined

    return "Field is required"
}


export const maxLenght = (maxlength) => (value) => {
    if(value.length > maxlength) return `Post is over ${maxlength} symbols`
    return undefined;
}