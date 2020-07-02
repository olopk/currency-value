import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const fetchCurrencies = () => {
    return async dispatch => {

        dispatch({type: actionTypes.FETCH_CURRENCIES_START});

        await axios.get('https://api.nbp.pl/api/exchangerates/tables/a/')
        .then(data => {
            const {rates, effectiveDate} = data.data[0];
            dispatch({
                type: actionTypes.FETCH_CURRENCIES_SUCCESS,
                currencies: rates,
                date: effectiveDate
            });
        })
        .catch(error => {
            dispatch({type: actionTypes.FETCH_CURRENCIES_FAIL, error: error});
        })
    }
}