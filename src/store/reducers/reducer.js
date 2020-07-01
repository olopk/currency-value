import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currencies: [],
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
                loading: false,
                error: null
            }
        case actionTypes.FETCH_CURRENCIES_FAIL:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.ADD_FAVOURITE:
            return{
                ...state,
                favourites: state.favourites.find(el => el.code === action.currency.code) ? state.favourites : state.favourites.push(action.currency)
            }
        case actionTypes.REM_FAVOURITE:
            return{
                ...state,
                favourites: state.favourites.filter(el => el.code !== action.currency.code)
            }
        default: return state
    }
}

export default reducer;