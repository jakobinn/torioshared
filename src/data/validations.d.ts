import moment from "moment-timezone";
export declare const numberRegex: RegExp;
export declare const countryCodeRegex: RegExp;
export declare const emailRegex: RegExp;
export declare const getLinkRegexExpression: () => RegExp;
export declare const isNumber: (value: any) => boolean;
export declare const isCountryCodeValid: (value: any) => boolean;
export declare const isEmailValid: (email: any) => boolean;
export declare const isPasswordValid: (value: any) => boolean;
export declare const isMilitaryTime: (string: any) => boolean;
export declare const isCorrectDate: (string: any) => boolean;
export declare const isLink: (value: any, strIncludes: any) => boolean;
export declare const getCurrentTimeByTimezone: (timeZone: any) => {
    time: moment.Moment;
    currentDate: string;
};
