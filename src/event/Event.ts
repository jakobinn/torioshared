import Joi from 'joi';
import barTypes from '../data/barTypes';
import { joiStringMessage } from '../data/joiMessages';
import { militaryTimeRegex } from '../data/validations';
import { TorioImage } from '../images';
// import { getLinkRegexExpression } from '../data/validations';

export interface event {
	name: string;
	description: string;
	nameis?: string;
	descriptionis?: string;
	from: string;
	to: string;
    fee: string;
	image?: TorioImage,
}

export interface manageEventQuery extends event {
	modal?: any,
    id?: string;
}

export interface getEventQuery {
	id: string;
    modal: any;
}

export const eventSchema = Joi.object({
	name: Joi.string().max(30).required().messages({
		...joiStringMessage({name: 'Name (English)', isRequired: true}),
	}),
    nameis: Joi.string().max(30).optional().allow('').messages({
		...joiStringMessage({name: 'Name (Icelandic)', isRequired: true}),
	}),
	description: Joi.string().required().max(500).messages({
		...joiStringMessage({name: 'Description (English)'}),
	}),
	descriptionis: Joi.string().optional().allow('').max(500).messages({
		...joiStringMessage({name: 'Name (Icelandic)'}),
	}),
	from: Joi.string().required().pattern(militaryTimeRegex).min(3).max(5).messages({
		...joiStringMessage({name: 'From', patternText: 'has to be on the form "hh:mm" such as 13:05'}),
	}),
    to: Joi.string().required().pattern(militaryTimeRegex).min(3).max(5).messages({
		...joiStringMessage({name: 'To', patternText: 'has to be on the form "hh:mm" such as 13:05'}),
	}),
	fee: Joi.number().optional().allow('').min(0).max(10000).messages({
		...joiStringMessage({name: 'Fee / Price'}),
	}),
	image: Joi.any().optional(),
});

export const eventInitalized = {
	name: '',
	description: '',
	nameis: '',
	descriptionis: '',
	from: '',
	to: '',
    fee: '',
    image: null,
};
