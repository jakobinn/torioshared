import Joi from "joi";
import { GeneralResponse } from "../general";
export interface PlaceUserForm {
    _id: string;
    email: string;
    role: string;
}
export declare const placeUserFormInitialized: {
    _id: string;
    email: string;
    role: string;
};
export interface PlaceUser extends PlaceUserForm {
    user: any;
    userId: string;
    place: any;
    hasJoined: boolean;
    active: boolean;
    inviteLink: string;
    inviteSent: number;
    phoneApproved: string;
}
export declare const placeUserInitialized: {
    hasJoined: boolean;
    inviteLink: string;
    inviteLinkSent: boolean;
    _id: string;
    email: string;
    role: string;
};
export interface GetPlaceUserResponse extends GeneralResponse {
    user: PlaceUser;
}
export interface SavePlaceUserRequest extends PlaceUserForm, PlaceUserForm {
}
export declare const placeUserSchema: Joi.ObjectSchema<any>;
