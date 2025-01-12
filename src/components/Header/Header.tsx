import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>TODO</h1>
                <button className={styles.themeToggle} aria-label="Activate dark mode"></button>
            </div>
        </header>
    )
};

export default Header;