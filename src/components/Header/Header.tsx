import React, {useState} from "react";
import styles from "./Header.module.css";
import ButtonToggle from "../ButtonToggle/ButtonToggle"
import AddTodo from "../AddTodo/AddTodo"

const Header: React.FC = () => {


    return (
        <header className={styles.header}>
            <div className={styles.copyContainer}>
                <div className={styles.title}>
                    <h1>TODO</h1>
                    <ButtonToggle />
                </div>
                <AddTodo />
            </div>
        </header>
    )
};

export default Header;