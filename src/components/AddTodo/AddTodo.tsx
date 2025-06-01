import React, {useState} from "react";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem("todo") as HTMLInputElement;
        const inputValue = input.value.trim();
        
        setTodos((prevTodos) => [...prevTodos, inputValue]); // Add inputValue to the todos list
        e.currentTarget.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit} aria-label="Create a new todo">
                <input
                    className={styles.addTodo}
                    type="text"
                    placeholder="Create a new todo..."
                    aria-label="Task description"
                    name="todo"
                />
            </form>

            <ul className={styles.todoList}>
                {todos.map((todo) => (
                   <li key={todo}>{todo}</li>
                ))}
            </ul>
        </>
    )
};

export default AddTodo;