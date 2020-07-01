import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const fetchCurrencies = () => {
    return async dispatch => {
        dispatch(actionTypes.FETCH_CURRENCIES_START);

        await axios.get('http://api.nbp.pl/api/exchangerates/tables/a/')
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}