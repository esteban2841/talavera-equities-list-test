export interface Equity {
    symbol: string;
    name: string;
    price: number;
    daily_change: number;
}
export type Equities = Equity[];


export interface FilterTag {
    type: 'primary' | 'secondary';
    content: string;
}
export type FilterList = FilterTag[];