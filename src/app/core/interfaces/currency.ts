
export interface Currency {
    id: number,
    symbol:string,
    name: string,
    convertibilityIndex: number
}

export interface CurrencyForCreation{
    symbol:string;
    name: string;
    convertibilityIndex:number;
}