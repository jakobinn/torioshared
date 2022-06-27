import Joi, { string } from 'joi';

export interface profileTypes {
	phone: string,
	allowPhoneLogin: boolean,
	country: string,
	countryPhoneCode: string,
	firstName: string,
	lastName: string,
	modal?: any
}

export interface profileTypesQuery extends profileTypes {
	modal?: any,
}


export const userSchema = Joi.object({
	phone: Joi.string(),
	countryPhoneCode: Joi.string(),
	allowPhoneLogin: Joi.boolean(),
	country: Joi.string(), //.optional().allow(string).min(4),
	firstName: Joi.string(),
	lastName: Joi.string(),
	
});

export const userInitalized = {
	phone: '',
	allowPhoneLogin: false,
	country: '',
	countryPhoneCode: '',
	firstName: '',
	lastName: '',
};

export const userFromBackend = (data) => {
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
// phonedata.bla, :: data.phone,
// allowPhoneLogin: data.allowPhoneLogin,
// country: data.country,
// countryPhoneCode: data.countryPhoneCode,
// firstName: data.firstName,
// lastName: data.lastName,

export const setUserInitalized = (data) => {
	return {
		phone: data.phone,
		allowPhoneLogin: data.allowPhoneLogin,
		country: data.country,
		countryPhoneCode: data.countryPhoneCode,
		firstName: data.firstName,
		lastName: data.lastName,
	};
};

export const setAllUserInitalized = (data) => {
	return data;
};

export const setPhoneInitalized = (data) => {
	return {
		phone: data.phone,
		countryPhoneCode: data.countryPhoneCode,
		phoneConfirmed: data.phoneConfirmed,
	};
};
