import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.headerToDoList}>
      <img src="/logo-todo.svg" alt="Logo" title="ToDo List" />
    </header>
  );
};