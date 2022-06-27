export interface TorioImage {
   image: string,
   type: string,
   size?: number,
   approved?: boolean,
   place?: any, 
}

export interface Images {
    images: Array<TorioImage>
}

export const minimalImageInitalized = {
    image: '',
    type: '',
}

export const imageInitalized = {
    image: '',
    size: 0,
    approved: true,
    type: '',
    place: '', 
};
