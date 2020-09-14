import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import toDosReducer from './reducers/todos';
import addNewToDo from './actions/todos';
import { Provider } from 'react-redux';
import ToDos from './components/ToDos';
import ToDoList from './components/ToDoList';

/**
 * Redux Store
 * Store is our global state. This iw where all of our global data exists. We pass in the reducer so it will know how to handle any actions (requests.)
 */

const store = createStore( 
  toDosReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

// Default method included in store called 'subscribe', which is used to run instructions every time there is an update to the store.
// In this case we are requesting it to console log the store's state every time there is a change.  
store.subscribe( () => console.log( store.getState() ) );

/**
 * Redux Dispatch is used to send acctions to our stores' reducer
 * Dispatch expects a properly formatted action, otherwise your reducer will not be able to read it. 
 */
 store.dispatch( addNewToDo( "Research Redux") );
 store.dispatch( addNewToDo( "Review React") );

 // When using Redux, we use <Provider> command to come up with a 'store' prop to pass our global state info into.. Whenever we need it (whichever componenent needs it). 
ReactDOM.render(
  <Provider store={store}>
    <ToDos />
    <ToDoList />

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
