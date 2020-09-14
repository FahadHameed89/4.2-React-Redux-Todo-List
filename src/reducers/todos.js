import { v4 as uuidv4} from 'uuid'

/**
 * Redux Reducer(s)
 * 1. Just note we are using the same name for actions and reducers (todos.js) so we know which belongs with which and to reduce risk of confusion
 * A reducer will actually carry out the request or data mutation. It is expecting an 'action' to be passed that matches a type programmed-in. 
 */
    // 1) State (default value. - here we use [] to indicate an array)
    // 2) If your passing an ACTION, it's a function which returns an OBJECT (the request being sent.)
 const toDosReducer = ( state = [], action ) => { // Placeholder Fat arrow function , typically we see 2 parameters.
    // Which action is this? What should we do?
    switch ( action.type ) { 
        // If this is the ADD NEW ACTION action...
        case 'ADD_NEW_TO_DO':
            // Prepare a new Task object
            const newTask = {
                id: uuidv4,
                task: action.payload
            }
            // Create a Copy of the original state array.
            const newToDoList = [...state];
            // Add the new task to the new array.
            newToDoList.push( newTask );
            // Return the updated state (overwrites the previous state)
            return newToDoList;
        case 'REMOVE_TO_DO':
            const updatedToDoList = state.filter( 
                toDo => toDo.id !== action.payload
             ); // .filter() method returns a new array after the filtration. It takes a FUNCTION as an argument, where we decide what is a match and what isnt a match.
                // In this case, we are filtering and giving the SAME array, EXCEPT FOR the one which ID equals the action.payload, which will be FILETERED out. 
                return updatedToDoList;
                // RETURNS THE OVERTWRITE THE state with this new array of To-Dos. 
             // By default, make no change
            default:
                return state;
     }
 };


//
 export default toDosReducer;