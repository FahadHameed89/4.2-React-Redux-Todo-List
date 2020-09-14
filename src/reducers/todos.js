import { v4 as uuidv4} from 'uuid'

/**
 * Redux Reducer(s)
 * 1. Just note we are using the same name for actions and reducers (todos.js) so we know which belongs with which and to reduce risk of confusion
 * A reducer will actually carry out the request or data mutation. It is expecting an 'action' to be passed that matches a type programmed-in. 
 */
    // 1) State (default value. - here we use [] to indicate an array)
    // 2) If your passing an ACTION, it's a function which returns an OBJECT (the request being sent.)
    const toDosReducer = ( state = [], action ) => {
        // Which action is this? What should we do!?
        switch ( action.type ) {
          // If this is the ADD NEW action...
          case 'ADD_NEW_TO_DO':
            // Prepare a new task object.
            const newTask = {
              id: uuidv4(),
              task: action.payload
            };
            // Create a COPY of the original state array.
            const newToDoList = [...state];
            // Add the new task to the new array.
            newToDoList.push( newTask );
            // Return the updated state (overwrites the state.)
            return newToDoList;
          case 'REMOVE_TO_DO':
            // Note: the Array.filter() method returns an UPDATED COPY of the array.
            const updatedToDoList = state.filter( // filter() takes a function as an argument.
              // The array will be composed only of items that do NOT have the ID we passed.
              toDo => toDo.id !== action.payload
            );
            // Return / overwrite the state with this new array of To-Dos.
            return updatedToDoList;
          // By default, make no change... (if the action type...
          // doesn't match.)
          default:
            return state;
        }
      }
      


//
 export default toDosReducer;