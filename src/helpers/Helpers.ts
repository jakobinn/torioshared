export const initializeStore = (initData, initStructure) => {
    if(initData && initStructure) {
        Object.keys(initStructure).forEach((key) => {
            initStructure[key] = initData[key];
        })
    }
    return initStructure;
}