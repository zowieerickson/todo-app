import React, {useState} from "react";

const AddTodo: React.FC = () => {


    return (
        <form aria-label="Create a new todo">
            <input 
                type="text"
                placeholder="Create a new todo..."
                aria-label="Task description"
            />
        </form>
    )
};

export default AddTodo;