import React, {useEffect} from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import DataContainer from './DataContainer/DataContainer';
import { useSelector, useDispatch } from 'react-redux';

import {fetchCurrencies} from '../store/actions/currencies_fetching';

export default function Main() {

  const currencies = useSelector(state => state.currencies)
  const currenciesDate = useSelector(state => state.currenciesDate)
  const favourites = useSelector(state => state.favourites)
  const fetchData = useDispatch()

  console.log(currenciesDate)

  useEffect(()=>{
  if(currencies.length === 0){
       fetchData(fetchCurrencies())
    }
  },[currencies, fetchData])

  return (
    <BrowserRouter>
      <Container fixed>
          <NavBar/>
          <Switch>
              <Route path='/favourites' render={()=>(
                <DataContainer
                    type='favourites'
                    currencies={favourites}
                    currenciesDate={currenciesDate}
                />
                )}/>
              <Route path='/' render={()=>(
                  <DataContainer
                     type='currencies'
                     currencies={currencies}
                     favourites={favourites}
                     currenciesDate={currenciesDate}
                  />
              )}/>
          </Switch>

      </Container>
    </BrowserRouter>
  );
}