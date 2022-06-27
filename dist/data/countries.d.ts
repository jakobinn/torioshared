declare const countries: ({
    code: string;
    label: string;
    phone: string;
    suggested?: undefined;
} | {
    code: string;
    label: string;
    phone: string;
    suggested: boolean;
})[];
export default countries;
