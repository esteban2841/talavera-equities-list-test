import React, { useReducer, useRef, useContext } from 'react'
import { EquitiesContext } from './EquitiesContext';
import { EquitiesReducer } from './EquitiesReducer';
import DATAJSON from '../../../dummy_stock_data.json'
import { Equity } from '../../types/equities';
import { calcYesterdayEquityPrice, sorting } from '../../utils/equities';

const {stocks} = DATAJSON

const INITIAL_STATE: EquitiesContext = {
    equities: [...stocks],
    filteredEquities: [],
    equityChanges: [],
}

interface Props {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode
  }

export const EquitiesProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(EquitiesReducer, INITIAL_STATE)
    
    const sortEquitiesAsc = (payload: Equity[]) =>{
        const sortedEquities = sorting([...payload], 'name')
        dispatch({type:'sortEquitiesAsc', payload: sortedEquities})
    }
    const setEquityChanges = (payload: Equity) =>{
        const equityChanges = calcYesterdayEquityPrice(payload)
        dispatch({type:'setEquityChanges', payload: equityChanges})
    }


    return (
        <EquitiesContext.Provider value={{
            ...state,
            sortEquitiesAsc,
            setEquityChanges
        }}>
            {children}
        </EquitiesContext.Provider>
    )
}

