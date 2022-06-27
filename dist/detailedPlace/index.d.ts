import Joi from 'joi';
export interface locationTypes {
    lat: number;
    long: number;
    address: string;
}
export interface linksTypes {
    facebookLink: string;
    instagramLink: string;
    websiteLink: string;
    foodMenu: string;
    drinkMenu: string;
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
    images: any;
}
export declare const locationSchema: Joi.ObjectSchema<any>;
export declare const linksSchema: Joi.ObjectSchema<any>;
export declare const detailsSchema: Joi.ObjectSchema<any>;
export declare const locationInitialized: {
    address: string;
    lat: number;
    long: number;
};
export declare const linksInitalized: {
    facebookLink: string;
    instagramLink: string;
    websiteLink: string;
    foodMenu: string;
    drinkMenu: string;
};
export declare const detailsInitalized: {
    name: string;
    description: string;
    descriptionis: string;
    dresscode: string;
    openingTimesis: string;
    foodDescriptionis: string;
    translation: string;
    dresscodeis: string;
    musicgenreis: string;
    countryis: string;
    openingTimes: string;
    isActive: boolean;
    isFoodService: boolean;
    foodDescription: string;
    musicgenre: string;
    genre: string;
    country: string;
    features: any[];
};
export declare const imagesInitalized: {
    images: any[];
};
