import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import * as serviceWorker from './serviceWorker';
import checkoutReducer from './store/reducers/checkoutReducer';
import availableItemsReducer from './store/reducers/availableItemReducer';

const rootReducer = combineReducers({
    checkout: checkoutReducer,
    availableItems: availableItemsReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
