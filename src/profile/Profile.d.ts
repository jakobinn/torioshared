import Joi from 'joi';
export declare const userSchema: Joi.ObjectSchema<any>;
export declare const userInitalized: {
    phone: string;
    allowPhoneLogin: boolean;
    country: string;
    countryPhoneCode: string;
    firstName: string;
    lastName: string;
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
    isConfirmed: any;
};
