interface joiStringMessageProps {
    name: string;
    isRequired?: boolean;
    patternText?: string;
}
export declare const joiStringMessage: ({ name, isRequired, patternText }: joiStringMessageProps) => {
    'string.base': string;
    'string.max': string;
    'string.min': string;
};
export {};
