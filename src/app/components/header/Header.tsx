import { PlusCircle } from "phosphor-react";

import styles from "./Styles.module.css";
import commonStyles from "../../styles/Common.module.css";
import { FormEvent, useState } from "react";

interface IHeaderProps {
  adicionarTarefa: (titleValue: string) => void;
}

export const Header: React.FC<IHeaderProps> = ({ adicionarTarefa }) => {
  const [texto, setTexto] = useState("");

  const handleValueChange = (value: string) => {
    setTexto(value);
  };

  const handleNewTask = (e: FormEvent) => {
    e.preventDefault();

    if (texto.trim().length === 0) return;
    setTexto("");
    adicionarTarefa(texto);
  };

  return (
    <header className={styles.headerToDoList}>
      <img src="/logo-todo.svg" alt="Logo" title="ToDo List" />

      <form onSubmit={handleNewTask} className={`${commonStyles.container} ${styles.barraDeFerramenta}`}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          value={texto}
          onChange={e => handleValueChange(e.target.value)}
        />

        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};