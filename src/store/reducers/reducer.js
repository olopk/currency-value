import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currencies: [],
    currenciesDate: null,
    favourites: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_CURRENCIES_START:
            return{
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.FETCH_CURRENCIES_SUCCESS:
            return{
                ...state,
                currencies: action.currencies,
                currenciesDate: action.date,
                loading: false,
                error: null
            }
        case actionTypes.FETCH_CURRENCIES_FAIL:
            return{
                ...state,
                loading: false,
                currenciesDate: null,
                error: action.error
            }
        case actionTypes.TOGGLE_FAVOURITE:
            let newFavs = [...state.favourites];
            const favExists = state.favourites.find(el => el === action.currency);
            if(favExists){
                newFavs = newFavs.filter(el => el !== action.currency)
            }else{
                newFavs.push(action.currency)
            }
            return{
                ...state,
                favourites: newFavs
            }
        case actionTypes.REMOVE_ALL_FAVOURITES:
            return{
                ...state,
                favourites: []
            }
        default: return state
    }
}

export default reducer;