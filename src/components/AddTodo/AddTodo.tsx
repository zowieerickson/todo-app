import React, {useState} from "react";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue : string = e.target[0].value;
        setTodos((prevTodos) => [...prevTodos, inputValue]) // Add inputValue to the todos list
        console.log(inputValue, todos)
    }

    return (
        <>
            <form onSubmit={handleSubmit} aria-label="Create a new todo">
                <input
                    className={styles.addTodo}
                    type="text"
                    placeholder="Create a new todo..."
                    aria-label="Task description"
                />
            </form>

            <ul className={styles.addTodo}>
                {todos.map((todo, index) => (
                   <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
};

export default AddTodo;