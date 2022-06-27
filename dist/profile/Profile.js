"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPhoneInitalized = exports.setAllUserInitalized = exports.setUserInitalized = exports.userFromBackend = exports.userInitalized = exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    phone: joi_1.default.string(),
    countryPhoneCode: joi_1.default.string(),
    allowPhoneLogin: joi_1.default.boolean(),
    country: joi_1.default.string(),
    firstName: joi_1.default.string(),
    lastName: joi_1.default.string(),
});
exports.userInitalized = {
    phone: '',
    allowPhoneLogin: false,
    country: '',
    countryPhoneCode: '',
    firstName: '',
    lastName: '',
};
const userFromBackend = (data) => {
    return {
        places: data.places,
        placeUser: data.placeUser,
        email: data.email,
        phone: data.phone,
        allowPhoneLogin: data.allowPhoneLogin,
        country: data.country,
        countryPhoneCode: data.countryPhoneCode,
        phoneConfirmed: data.phoneConfirmed,
        firstName: data.firstName,
        lastName: data.lastName
    };
};
exports.userFromBackend = userFromBackend;
// phonedata.bla, :: data.phone,
// allowPhoneLogin: data.allowPhoneLogin,
// country: data.country,
// countryPhoneCode: data.countryPhoneCode,
// firstName: data.firstName,
// lastName: data.lastName,
const setUserInitalized = (data) => {
    return {
        phone: data.phone,
        allowPhoneLogin: data.allowPhoneLogin,
        country: data.country,
        countryPhoneCode: data.countryPhoneCode,
        firstName: data.firstName,
        lastName: data.lastName,
    };
};
exports.setUserInitalized = setUserInitalized;
const setAllUserInitalized = (data) => {
    return data;
};
exports.setAllUserInitalized = setAllUserInitalized;
const setPhoneInitalized = (data) => {
    return {
        phone: data.phone,
        countryPhoneCode: data.countryPhoneCode,
        phoneConfirmed: data.phoneConfirmed,
    };
};
exports.setPhoneInitalized = setPhoneInitalized;
