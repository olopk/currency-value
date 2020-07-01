import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import DataContainer from './DataContainer/DataContainer';
import { useSelector } from 'react-redux';

export default function Main() {

  const error = useSelector(state => state.error)

  console.log(error)

  return (
    <BrowserRouter>
      <Container fixed>
          <NavBar/>
          <Switch>
              <Route path='/favourites' render={()=> {
                //   some component to render
              }}/>
              <Route path='/' render={()=>(
                  <DataContainer/>
              )}/>
          </Switch>

      </Container>
    </BrowserRouter>
  );
}