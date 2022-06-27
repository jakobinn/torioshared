import Joi from 'joi';
import { TorioImage } from './../images';
export interface Place {
    name: string;
    ssn: string;
    email: string;
    subscription: string;
    active?: boolean;
    image?: TorioImage;
    identifier: string;
    country?: string;
    currency: string;
    placeUsers: any;
}
export declare const placeInitalized: {
    name: string;
    email: string;
    ssn: string;
    subscription: string;
    active: boolean;
    image: {
        image: string;
        type: string;
    };
    identifier: string;
    country: string;
    currency: string;
    placeUsers: any[];
};
export declare const placeSchema: Joi.ObjectSchema<any>;
