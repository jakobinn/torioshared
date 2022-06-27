"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeStore = void 0;
const initializeStore = (initData, initStructure) => {
    if (initData && initStructure) {
        Object.keys(initStructure).forEach((key) => {
            initStructure[key] = initData[key];
        });
    }
    return initStructure;
};
exports.initializeStore = initializeStore;
