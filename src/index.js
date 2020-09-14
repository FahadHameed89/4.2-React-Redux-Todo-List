import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';

/**
 * Redux Store
 * Store is our global state. This iw where all of our global data exists. We pass in the reducer so it will know how to handle any actions (requests.)
 */

const store = createStore( toDosReducer );

// Default method included in store called 'subscribe', which is used to run instructions every time there is an update to the store.
// In this case we are requesting it to console log the store's state every time there is a change.  
store.subscribe( () => console.log( store.getState() ) );

/**
 * Redux Dispatch
 */

ReactDOM.render(
  <React.StrictMode>
    <>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
