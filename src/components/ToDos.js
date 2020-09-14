import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewToDo } from '../actions/todos';


function ToDos ( props ) 
{
    const [newTask, setNewTask] = useState( '' );

// Add a Submit Function 

    const submitToDo = event => {
        event.preventDefault(); // Stop the page reloading!!!
        props.dispatch(addNewToDo ( newTask ) );
    }

    return (
        <>
        <h2>To-Do Form</h2>
        <form onSubmit={submitToDo}>
            <label htmlFor="task">Enter New Task:</label>
            <input 
            id="task" 
            type="text"
            value={newTask} 
            onChange= { event => {setNewTask( event.target.value); } } />
            <input value="Add New To-Do" type="submit" />
        </form>
        <ul></ul>
        </>
    );
}

export default connect(
// We set up a 'mapStateToProps' function / relationship. 
// Basically whatever is returned from Connect basically adds a props to 
    state => { return { toDos: state } } 
)(ToDos);

// Line 16 - OnChange, We create a function for an event in which it sets newTask = event.target.value