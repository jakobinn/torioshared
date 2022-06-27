import Joi from 'joi';
import barTypes from '../data/barTypes';
import { joiStringMessage } from '../data/joiMessages';
import { getLinkRegexExpression } from '../data/validations';

export interface locationTypes {
    lat: number,
    long: number,
    address: string,
}

export interface linksTypes {
    facebookLink: string,
    instagramLink: string,
    websiteLink: string,
    foodMenu: string,
    drinkMenu: string,
}

export interface detailsTypes {
	name: string;
	description: string;
	isActive: boolean;
	isFoodService: boolean;
	foodDescription: string;
	musicgenre: string;
    openingTimes: string;
	country: string;
	features: Array<string>;
    translation: string;
    descriptionis: string;
    openingTimesis: string;
    foodDescriptionis: string;
    dresscodeis: string;
    musicgenreis: string;
    countryis: string;
}

export interface imagesTypes {
    images: any
}

export const locationSchema = Joi.object({
    lat: Joi.number(),
    long: Joi.number(),
    address: Joi.string().max(40),
});

export const linksSchema = Joi.object({
    facebookLink: Joi.string()
	.pattern(getLinkRegexExpression())
	.allow('')
	.min(7)
	.max(3000)
	.messages({
		...joiStringMessage({name: 'Facebook link', patternText: 'must be a link.'}),
	}),
	instagramLink: Joi.string()
	.pattern(getLinkRegexExpression())
	.allow('')
	.min(7)
	.max(3000)
	.messages({
		...joiStringMessage({name: 'Instagram link', patternText: 'must be a link.'}),
	}),
	websiteLink: Joi.string()
	.pattern(getLinkRegexExpression())
	.allow('')
	.min(7)
	.max(3000)
	.messages({
		...joiStringMessage({name: 'Website link', patternText: 'must be a link.'}),
	}),
	foodMenu: Joi.string()
	.pattern(getLinkRegexExpression())
	.allow('')
	.min(7)
	.max(3000)
	.messages({
		...joiStringMessage({name: 'Food menu link', patternText: 'must be a link.'}),
	}),
	drinkMenu: Joi.string()
	.pattern(getLinkRegexExpression())
	.allow('')
	.min(7)
	.max(3000)
	.messages({
		...joiStringMessage({name: 'Drink menu link', patternText: 'must be a link.'}),
	}),
});


export const detailsSchema = Joi.object({
	isActive: Joi.boolean(),
	name: Joi.string().max(30).required().messages({
		...joiStringMessage({name: 'Name', isRequired: true}),
	}),
	description: Joi.string().optional().allow('').max(1500).messages({
		...joiStringMessage({name: 'Description'}),
	}),
	descriptionis: Joi.string().optional().allow('').max(1500).messages({
		...joiStringMessage({name: 'Description'}),
	}),
	openingTimesis: Joi.string().optional().allow('').max(300).messages({
		...joiStringMessage({name: 'Opening times'}),
	}),
	foodDescriptionis: Joi.string().optional().allow('').max(300).messages({
		...joiStringMessage({name: 'Food description'}),
	}),
	foodDescription: Joi.string().optional().allow('').max(300).messages({
		...joiStringMessage({name: 'Food description'}),
	}),
	isFoodService: Joi.boolean().optional(),
	musicgenre: Joi.string().optional().allow('').max(50).messages({
		...joiStringMessage({name: 'Name'}),
	}),
	musicgenreis: Joi.string().optional().allow('').max(50).messages({
		...joiStringMessage({name: 'Music genre'}),
	}),
	dresscodeis: Joi.string().optional().allow('').max(20).messages({
		...joiStringMessage({name: 'Desscode'}),
	}),
	dresscode: Joi.string().optional().allow('').max(20).messages({
		...joiStringMessage({name: 'Dresscode'}),
	}),
	country: Joi.string().optional().allow('').max(50).messages({
		...joiStringMessage({name: 'Country'}),
	}),
	countryis: Joi.string().optional().allow('').max(50).messages({
		...joiStringMessage({name: 'Country'}),
	}),
	translation: Joi.string().optional().allow(''),
	openingTimes: Joi.string().optional().allow('').max(300).messages({
		...joiStringMessage({name: 'Opening times'}),
	}),
	genre: Joi.string().optional().allow('').valid(...barTypes),
	features: Joi.any().optional(),
	selectedFeatures: Joi.any().optional(),
});

export const locationInitialized = {
    address: '',
    lat: 0,
    long: 0
}

export const linksInitalized = {
	facebookLink: '',
    instagramLink: '',
    websiteLink: '',
    foodMenu: '',
    drinkMenu: '',
}

export const detailsInitalized = {
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

export const imagesInitalized = {
    images: [],
};
