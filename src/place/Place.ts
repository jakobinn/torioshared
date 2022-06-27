import Joi from 'joi';
import { joiStringMessage } from '../data/joiMessages';
import { emailRegex, militaryTimeRegex } from '../data/validations';
import { TorioImage } from './../images';

export interface Place {
	name: string,
	ssn: string,
	email: string,
	subscription: string,
	active?: boolean,
	image?: TorioImage,
	identifier: string,
	country?: string,
	currency: string,
	placeUsers: any,
}

export const placeInitalized = {
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

export const placeSchema = Joi.object({
	name: Joi.any().allow(''),
	subscription: Joi.any().allow(''),
	active: Joi.boolean(),
	identifier: Joi.any().allow(''),
	username: Joi.any().allow(''),
	timezone: Joi.any().allow(''),
	timezoneNumber: Joi.any().allow(''),
	currency: Joi.any().allow(''),
	country: Joi.any().allow(''),
	password: Joi.any().allow(''),
	// company admin
	ssn: Joi.string().optional().allow('').messages({
		...joiStringMessage({name: 'SSN'}),
	}),
	email: Joi.string().allow('').pattern(emailRegex).messages({
		...joiStringMessage({name: 'Email', patternText: 'has to be valid email'}),
	}),
	image: Joi.any().optional(),
	placeUsers: Joi.any().allow(''),
});


