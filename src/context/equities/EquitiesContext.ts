import { createContext } from 'react'
import { Equity } from '../../types/equities';

export interface EquitiesContext {
    [key: string]: any;
    equities: Equity[];
    filteredEquities?: Equity[];
    equityChanges?: Equity[];
    sortEquitiesAsc?: (payload: any) => void
    setEquityChanges?: (payload: any) => void
}

export const EquitiesContext = createContext({} as EquitiesContext)