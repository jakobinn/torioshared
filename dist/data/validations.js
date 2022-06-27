"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTimeByTimezone = exports.isLink = exports.isCorrectDate = exports.isMilitaryTime = exports.isPasswordValid = exports.isEmailValid = exports.isCountryCodeValid = exports.isNumber = exports.getLinkRegexExpression = exports.militaryTimeRegex = exports.emailRegex = exports.countryCodeRegex = exports.numberRegex = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
exports.numberRegex = /^\d+\.?\d*$/;
exports.countryCodeRegex = /^\+\d+$/;
exports.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
exports.militaryTimeRegex = /(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23):?(0|1|2|3|4|5)\d/;
const getLinkRegexExpression = () => {
    const linkReg = new RegExp("^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
    return linkReg;
};
exports.getLinkRegexExpression = getLinkRegexExpression;
const isNumber = (value) => {
    return exports.numberRegex.test(value);
};
exports.isNumber = isNumber;
const isCountryCodeValid = (value) => {
    return exports.countryCodeRegex.test(value);
};
exports.isCountryCodeValid = isCountryCodeValid;
const isEmailValid = (email) => {
    const reg = new RegExp(exports.emailRegex);
    return reg.test(email) ? true : false;
};
exports.isEmailValid = isEmailValid;
const isPasswordValid = (value) => {
    if (value && value.length > 8) {
        return true;
    }
    else {
        return false;
    }
};
exports.isPasswordValid = isPasswordValid;
const isMilitaryTime = (string) => {
    if (!string) {
        return true;
    }
    return exports.militaryTimeRegex.test(string);
};
exports.isMilitaryTime = isMilitaryTime;
//Date is on following form: YYYY-MM-DD
const isCorrectDate = (string) => {
    let isCorrect = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(string);
    return isCorrect;
};
exports.isCorrectDate = isCorrectDate;
const isLink = (value, strIncludes) => {
    var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
    let tested = !!pattern.test(value);
    if (tested && strIncludes) {
        tested = value.includes(strIncludes);
    }
    return tested;
};
exports.isLink = isLink;
const getCurrentTimeByTimezone = (timeZone) => {
    if (timeZone) {
        let time = (0, moment_timezone_1.default)().tz(timeZone ? timeZone : "Europe/London");
        let currentDate = (0, moment_timezone_1.default)(time).format("DD-MM-YYYY HH:mm");
        return { time, currentDate };
    }
    return { time: null, currentDate: 'No data' };
};
exports.getCurrentTimeByTimezone = getCurrentTimeByTimezone;
