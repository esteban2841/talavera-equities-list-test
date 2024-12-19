import React, { useReducer, useRef, useContext } from 'react'
import { EquitiesContext } from './EquitiesContext';
import { EquitiesReducer } from './EquitiesReducer';
import DATAJSON from '../../../dummy_stock_data.json'
import { Equity } from '../../types/equities';
import { sorting } from '../../utils/equities';

const {stocks} = DATAJSON

const INITIAL_STATE: EquitiesContext = {
    equities: [...stocks],
    filteredEquities: [],
}

interface Props {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode
  }

export const EquitiesProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(EquitiesReducer, INITIAL_STATE)
    
    const sortEquitiesAsc = (payload: Equity[]) =>{
		console.log("TCL: sortEquitiesAsc -> payload", payload)
        const sortedEquities = sorting([...payload], 'name')
		console.log("TCL: sortEquitiesAsc -> sortedEquities", sortedEquities)
        dispatch({type:'sortEquitiesAsc', payload: sortedEquities})
    }


    return (
        <EquitiesContext.Provider value={{
            ...state,
            sortEquitiesAsc
        }}>
            {children}
        </EquitiesContext.Provider>
    )
}

