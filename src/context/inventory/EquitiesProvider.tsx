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
    
    const sortEquities = async (payload: Equity[]) =>{
        const sortedEquities = sorting([...payload])
        dispatch({type:'sortEquities', payload: sortedEquities})
    }


    return (
        <EquitiesContext.Provider value={{
            ...state,
            sortEquities
        }}>
            {children}
        </EquitiesContext.Provider>
    )
}

export const useEquitiesProvider = useContext(EquitiesContext)
