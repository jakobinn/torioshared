export interface TorioImage {
    image: string;
    type: string;
    size?: number;
    approved?: boolean;
    place?: any;
}
export interface Images {
    images: Array<TorioImage>;
}
export declare const minimalImageInitalized: {
    image: string;
    type: string;
};
export declare const imageInitalized: {
    image: string;
    size: number;
    approved: boolean;
    type: string;
    place: string;
};
