"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventInitalized = exports.eventSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const joiMessages_1 = require("../data/joiMessages");
const validations_1 = require("../data/validations");
exports.eventSchema = joi_1.default.object({
    name: joi_1.default.string().max(30).required().messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Name (English)', isRequired: true }))),
    nameis: joi_1.default.string().max(30).optional().allow('').messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Name (Icelandic)', isRequired: true }))),
    description: joi_1.default.string().required().max(500).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Description (English)' }))),
    descriptionis: joi_1.default.string().optional().allow('').max(500).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Name (Icelandic)' }))),
    from: joi_1.default.string().required().pattern(validations_1.militaryTimeRegex).min(3).max(5).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'From', patternText: 'has to be on the form "hh:mm" such as 13:05' }))),
    to: joi_1.default.string().required().pattern(validations_1.militaryTimeRegex).min(3).max(5).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'To', patternText: 'has to be on the form "hh:mm" such as 13:05' }))),
    fee: joi_1.default.number().optional().allow('').min(0).max(10000).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Fee / Price' }))),
    image: joi_1.default.any().optional(),
});
exports.eventInitalized = {
    name: '',
    description: '',
    nameis: '',
    descriptionis: '',
    from: '',
    to: '',
    fee: '',
    image: null,
};
