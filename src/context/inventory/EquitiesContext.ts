import { createContext } from 'react'
import { Equity } from '../../types/equities';

export interface EquitiesContext {
    [key: string]: any;
    equities: Equity[];
    filteredEquities?: Equity[];
    fetchUsuario?: (payload: any) => void
}

export const EquitiesContext = createContext({} as EquitiesContext)