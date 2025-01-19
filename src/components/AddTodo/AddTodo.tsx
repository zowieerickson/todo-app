import React, {useState} from "react";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit being handled")
    }

    return (
        <form onSubmit={handleSubmit} aria-label="Create a new todo">
            <input
                className={styles.addTodo}
                type="text"
                placeholder="Create a new todo..."
                aria-label="Task description"
            />
        </form>
    )
};

export default AddTodo;