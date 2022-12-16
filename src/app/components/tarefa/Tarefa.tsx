import { Trash } from "phosphor-react";
import { Check } from "phosphor-react";

import styles from "./Styles.module.css";

interface ITarefaProps {
  tarefa: string;
  isComplete: boolean;
}

export const Tarefa: React.FC<ITarefaProps> = ({ tarefa, isComplete }) => {
  return (
    <div className={styles.conteudoTarefa}>
      <div className={styles.tarefa}>
        <label className={styles.tarefaCheck}>
          <input
            type="checkbox"
            checked={isComplete}
          />
          <span>
            <Check size={15} />
          </span>
        </label>

        <strong>{tarefa}</strong>
      </div>

      <button title="Apagar Tarefa" className={styles.apagarTarefa}>
        <Trash />
      </button>
    </div>
  );
};