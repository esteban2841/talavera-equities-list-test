import { EquitiesContext } from './EquitiesContext';

export const EquitiesReducer = (state: EquitiesContext, action: any) : EquitiesContext => {
    switch (action.type) {
        case 'sortEquitiesAsc':
            return {
                ...state,
                filteredEquities: action.payload
            }
        default:
            return state
    } 
}