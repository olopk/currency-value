import React from 'react';

import reducer from './store/reducers/reducer';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  shouldHotReload: false
}) : null || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        hello world
      </div>
    </Provider>
  );
}

export default App;
