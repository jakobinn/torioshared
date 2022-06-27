"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllObjectValuesArray = void 0;
const getAllObjectValuesArray = (obj) => {
    let arr = [];
    Object.keys(obj).forEach((key) => {
        let value = obj[key];
        arr.push(value);
    });
    return arr;
};
exports.getAllObjectValuesArray = getAllObjectValuesArray;
