import Joi from 'joi';
import { TorioImage } from '../images';
export interface event {
    name: string;
    description: string;
    nameis?: string;
    descriptionis?: string;
    from: string;
    to: string;
    fee: string;
    image?: TorioImage;
}
export interface manageEventQuery extends event {
    modal?: any;
    id?: string;
}
export interface getEventQuery {
    id: string;
    modal: any;
}
export declare const eventSchema: Joi.ObjectSchema<any>;
export declare const eventInitalized: {
    name: string;
    description: string;
    nameis: string;
    descriptionis: string;
    from: string;
    to: string;
    fee: string;
    image: any;
};
