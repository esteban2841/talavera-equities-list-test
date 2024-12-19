import { EquitiesContext } from './EquitiesContext';

export const EquitiesReducer = (state: EquitiesContext, action: any) : EquitiesContext => {
    switch (action.type) {
        case 'sortEquities':
            return {
                ...state,
                filteredEquities: action.payload
            }
        default:
            return state
    } 
}