import React, {useState} from "react";
import styles from "./AddTodo.module.css";
import IconCross from "../../../images/icon-cross.svg?react";

const AddTodo: React.FC = () => {
    type Todo = {
        id: string;
        text: string;
        completed: boolean;
    }

    const [todos, setTodos] = useState<Todo[]>([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements.namedItem("todo") as HTMLInputElement;
        const inputValue = input.value.trim();

        console.log('input value', inputValue)
        if (inputValue === "") {
            alert("Cannot add an empty to-do.")
            return
        }
        setTodos(prev => [...prev, { id: crypto.randomUUID(), text: inputValue, completed: false}]) // Add inputValue to the todos list
        e.currentTarget.reset();
    }

    function removeTodo (e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
        const target = e.target as HTMLElement;
        const button = target.closest('button');
        console.log(button)
        if (!button) return;

        setTodos(prev => prev.filter(item => item.id !== button.dataset.id))
    }

    function completeTodo (e: React.ChangeEvent<HTMLInputElement>, todoId: string) {
        e.stopPropagation()
        setTodos(prev => 
            prev.map(todo => 
                todo.id === todoId ? {...todo, completed: !todo.completed } : todo
            )
        )
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
                   <li key={todo.id} className={styles.todoItem}>
                        <div className={todo.completed ? styles.completed : ""}>
                            <label className={styles.checkbox}>
                                <input onChange={(e) => completeTodo(e, todo.id)} type="checkbox" checked={todo.completed}/>
                                <span></span>
                            </label>
                            {todo.text}
                        </div>
                        <button data-id={todo.id}>
                            <IconCross />
                        </button>
                   </li>
                ))}
            </ul>
        </>
    )
};

export default AddTodo;