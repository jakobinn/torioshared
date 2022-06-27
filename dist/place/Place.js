"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeSchema = exports.placeInitalized = void 0;
const joi_1 = __importDefault(require("joi"));
const joiMessages_1 = require("../data/joiMessages");
const validations_1 = require("../data/validations");
exports.placeInitalized = {
    name: '',
    email: '',
    ssn: '',
    subscription: '',
    active: true,
    image: {
        image: '',
        type: ''
    },
    identifier: '',
    country: '',
    currency: '',
    placeUsers: [],
};
exports.placeSchema = joi_1.default.object({
    name: joi_1.default.any().allow(''),
    subscription: joi_1.default.any().allow(''),
    active: joi_1.default.boolean(),
    identifier: joi_1.default.any().allow(''),
    username: joi_1.default.any().allow(''),
    timezone: joi_1.default.any().allow(''),
    timezoneNumber: joi_1.default.any().allow(''),
    currency: joi_1.default.any().allow(''),
    country: joi_1.default.any().allow(''),
    password: joi_1.default.any().allow(''),
    // company admin
    ssn: joi_1.default.string().optional().allow('').messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'SSN' }))),
    email: joi_1.default.string().allow('').pattern(validations_1.emailRegex).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Email', patternText: 'has to be valid email' }))),
    image: joi_1.default.any().optional(),
    placeUsers: joi_1.default.any().allow(''),
});
