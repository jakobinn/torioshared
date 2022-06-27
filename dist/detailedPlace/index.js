"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesInitalized = exports.detailsInitalized = exports.linksInitalized = exports.locationInitialized = exports.detailsSchema = exports.linksSchema = exports.locationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const barTypes_1 = __importDefault(require("../data/barTypes"));
const joiMessages_1 = require("../data/joiMessages");
const validations_1 = require("../data/validations");
exports.locationSchema = joi_1.default.object({
    lat: joi_1.default.number(),
    long: joi_1.default.number(),
    address: joi_1.default.string().max(40),
});
exports.linksSchema = joi_1.default.object({
    facebookLink: joi_1.default.string()
        .pattern((0, validations_1.getLinkRegexExpression)())
        .allow('')
        .min(7)
        .max(3000)
        .messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Facebook link', patternText: 'must be a link.' }))),
    instagramLink: joi_1.default.string()
        .pattern((0, validations_1.getLinkRegexExpression)())
        .allow('')
        .min(7)
        .max(3000)
        .messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Instagram link', patternText: 'must be a link.' }))),
    websiteLink: joi_1.default.string()
        .pattern((0, validations_1.getLinkRegexExpression)())
        .allow('')
        .min(7)
        .max(3000)
        .messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Website link', patternText: 'must be a link.' }))),
    foodMenu: joi_1.default.string()
        .pattern((0, validations_1.getLinkRegexExpression)())
        .allow('')
        .min(7)
        .max(3000)
        .messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Food menu link', patternText: 'must be a link.' }))),
    drinkMenu: joi_1.default.string()
        .pattern((0, validations_1.getLinkRegexExpression)())
        .allow('')
        .min(7)
        .max(3000)
        .messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Drink menu link', patternText: 'must be a link.' }))),
});
exports.detailsSchema = joi_1.default.object({
    isActive: joi_1.default.boolean(),
    name: joi_1.default.string().max(30).required().messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Name', isRequired: true }))),
    description: joi_1.default.string().optional().allow('').max(1500).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Description' }))),
    descriptionis: joi_1.default.string().optional().allow('').max(1500).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Description' }))),
    openingTimesis: joi_1.default.string().optional().allow('').max(300).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Opening times' }))),
    foodDescriptionis: joi_1.default.string().optional().allow('').max(300).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Food description' }))),
    foodDescription: joi_1.default.string().optional().allow('').max(300).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Food description' }))),
    isFoodService: joi_1.default.boolean().optional(),
    musicgenre: joi_1.default.string().optional().allow('').max(50).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Name' }))),
    musicgenreis: joi_1.default.string().optional().allow('').max(50).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Music genre' }))),
    dresscodeis: joi_1.default.string().optional().allow('').max(20).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Desscode' }))),
    dresscode: joi_1.default.string().optional().allow('').max(20).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Dresscode' }))),
    country: joi_1.default.string().optional().allow('').max(50).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Country' }))),
    countryis: joi_1.default.string().optional().allow('').max(50).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Country' }))),
    translation: joi_1.default.string().optional().allow(''),
    openingTimes: joi_1.default.string().optional().allow('').max(300).messages(Object.assign({}, (0, joiMessages_1.joiStringMessage)({ name: 'Opening times' }))),
    genre: joi_1.default.string().optional().allow('').valid(...barTypes_1.default),
    features: joi_1.default.any().optional(),
    selectedFeatures: joi_1.default.any().optional(),
});
exports.locationInitialized = {
    address: '',
    lat: 0,
    long: 0
};
exports.linksInitalized = {
    facebookLink: '',
    instagramLink: '',
    websiteLink: '',
    foodMenu: '',
    drinkMenu: '',
};
exports.detailsInitalized = {
    name: '',
    description: '',
    descriptionis: '',
    dresscode: '',
    openingTimesis: '',
    foodDescriptionis: '',
    translation: '',
    dresscodeis: '',
    musicgenreis: '',
    countryis: '',
    openingTimes: '',
    isActive: true,
    isFoodService: false,
    foodDescription: '',
    musicgenre: '',
    genre: '',
    country: '',
    features: [],
};
exports.imagesInitalized = {
    images: [],
};
