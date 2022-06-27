import Joi from 'joi';
export interface profileTypes {
    phone: string;
    allowPhoneLogin: boolean;
    country: string;
    countryPhoneCode: string;
    firstName: string;
    lastName: string;
    modal?: any;
}
export interface profileTypesQuery extends profileTypes {
    modal?: any;
}
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const userInitalized: {
    phone: string;
    allowPhoneLogin: boolean;
    country: string;
    countryPhoneCode: string;
    firstName: string;
    lastName: string;
};
export declare const userFromBackend: (data: any) => {
    places: any;
    placeUser: any;
    email: any;
    phone: any;
    allowPhoneLogin: any;
    country: any;
    countryPhoneCode: any;
    phoneConfirmed: any;
    firstName: any;
    lastName: any;
};
export declare const setUserInitalized: (data: any) => {
    phone: any;
    allowPhoneLogin: any;
    country: any;
    countryPhoneCode: any;
    firstName: any;
    lastName: any;
};
export declare const setAllUserInitalized: (data: any) => any;
export declare const setPhoneInitalized: (data: any) => {
    phone: any;
    countryPhoneCode: any;
    phoneConfirmed: any;
};
