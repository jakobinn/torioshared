import Joi from "joi";
import { getAllObjectValuesArray } from "../constants/dataHelper";
import { PLACE_ROLES } from "../constants/data";
import { joiStringMessage } from "../data/joiMessages";
import { emailRegex } from "../data/validations";
import { GeneralResponse, GeneralRequest, GeneralRequestWithId } from "../general";

// TYPES AND INITIALIZATIONS

export interface PlaceUserForm {
    _id: string,
    email: string,
    role: string,
}

export const placeUserFormInitialized = {
    _id: '',
    email: '',
    role: '',
}

export interface PlaceUser extends PlaceUserForm {
    user: any,
    userId: string,
    place: any,
    hasJoined: boolean,
    active: boolean,
    inviteLink: string,
    inviteSent: number,
    phoneApproved: string;
}

export const placeUserInitialized = {
    ...placeUserFormInitialized,
    hasJoined: false,
    inviteLink: '',
    inviteLinkSent: false,
}

// REQUEST AND RESPONSE TYPES

export interface GetPlaceUserResponse extends GeneralResponse {
    user: PlaceUser
}

export interface SavePlaceUserRequest extends PlaceUserForm, PlaceUserForm {}



// VALIDATION SCHEMAS

let arr = getAllObjectValuesArray(PLACE_ROLES);
export const placeUserSchema = Joi.object({
	_id: Joi.any().optional().allow(''),
    email: Joi.string().required().pattern(emailRegex).messages({
		...joiStringMessage({name: 'Email', isRequired: true, patternText: 'has to be valid email'}),
	}),
    role: Joi.string().allow(...arr).required().messages({
		...joiStringMessage({name: 'Role', isRequired: true}),
	}),
});

