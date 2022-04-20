/// Min - max range is inclusive
export const randomInt = (min: number, max: number) => {
    const _min = Math.ceil(min);
    const _max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}