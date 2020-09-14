/**
 * Redux Action(s)
 * 1. Think of actions as 'requests' formatting, labels for what you will allow in terms of requests or mutations for out store. 
 * 2. Actions define what we'll allow as requests to our reducers (which in turn, speak directly with the store on our behalf.)
 * 3. Action names, by convention, are uppercase (they are considered "CONSTANTS")
 */


 // For each action, think about what parameters or data we need to pass it for it to complete it's job?
 const addNewToDo = toDoContent => {
     return { // We are RETURNING a javascript OBJECT {}; with type: and payload: as it's parameters
         // This is the NAME of our action. 'type' is how our reducer knows what we want to do. 
         type: 'ADD_NEW_TO_DO',
         // This is the data we are passing through to the reducer...So that it can do it's job. 
         payload: toDoContent
     };
 }
 // In this case we are pulling in toDoContent,

 // Don't forget to export this, if we want to use this in other files. 
 // Note the curly braces allow us to export multiple items ssparated by commas.
 export default addNewToDo; 