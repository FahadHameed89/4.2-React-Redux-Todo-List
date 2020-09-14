import React, { useState } from 'react';

function ToDos () 
{
    const [newTask, setNewTask] = useState( '' );

// Add a Submit Function 

    const submitToDo = event => {
        event.preventDefault(); // Stop the page reloading!!!
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

        </>
    );
}

export default ToDos;

// Line 16 - OnChange, We create a function for an event in which it sets newTask = event.target.value