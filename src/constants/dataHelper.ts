export const getAllObjectValuesArray = (obj) => {
    let arr = [];
    Object.keys(obj).forEach((key: string) => {
        let value = obj[key];
        arr.push(value);
    })
    return arr;
}