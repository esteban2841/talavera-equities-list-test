export interface Equity {
    symbol: string;
    name: string;
    price: number;
    daily_change: number;
}
export interface Equities {
    equities: Equity[];
}