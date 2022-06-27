"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeUserSchema = exports.placeUserInitialized = exports.placeUserFormInitialized = void 0;
const joi_1 = __importDefault(require("joi"));
const dataHelper_1 = require("../constants/dataHelper");
const data_1 = require("../constants/data");
const joiMessages_1 = require("../data/joiMessages");
const validations_1 = require("../data/validations");
exports.placeUserFormInitialized = {
    _id: '',
    email: '',
    role: '',
};
exports.placeUserInitialized = Object.assign(Object.assign({}, exports.placeUserFormInitialized), { hasJoined: false, inviteLink: '', inviteLinkSent: false });
// VALIDATION SCHEMAS
let arr = (0, dataHelper_1.getAllObjectValuesArray)(data_1.PLACE_ROLES);
exports.placeUserSchema = joi_1.default.object({
    _id: joi_1.default.any().optional().allow(''),
    email: joi_1.default.string().required().pattern(validations_1.emailRegex).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Email', isRequired: true, patternText: 'has to be valid email' }))),
    role: joi_1.default.string().allow(...arr).required().messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Role', isRequired: true }))),
});
