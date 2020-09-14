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
                task: action.payload
            }
            // Create a Copy of the original state array.
            const newToDoList = [...state];
            // Add the new task to the new array.
            newToDoList.push( newTask );
            // Return the updated state (overwrites the previous state)
            return newToDoList;
            // By default, make no change
            default:
                return state;
     }
 };


//
 export default toDosReducer;