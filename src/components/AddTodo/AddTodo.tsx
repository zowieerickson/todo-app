import React, {useState} from "react";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {


    return (
        <form aria-label="Create a new todo">
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