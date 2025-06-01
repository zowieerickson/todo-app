import React, {useState} from "react";
import styles from "./AddTodo.module.css";

const AddTodo: React.FC = () => {
    type Todo = {
        id: string;
        text: string;
    }

    const [todos, setTodos] = useState<Todo[]>([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem("todo") as HTMLInputElement;
        const inputValue = input.value.trim();

        setTodos(prev => [...prev, { id: crypto.randomUUID(), text: inputValue}]) // Add inputValue to the todos list
        e.currentTarget.reset();
    }

    function removeTodo (e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
        const target = e.target as HTMLElement;
        const li = target.closest('li');
        if (!li) return;

        setTodos(prev => prev.filter(item => item.id !== li.dataset.id))
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

            <ul onClick={(e) => removeTodo(e)} className={styles.todoList}>
                {todos.map((todo) => (
                   <li key={todo.id} data-id={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </>
    )
};

export default AddTodo;