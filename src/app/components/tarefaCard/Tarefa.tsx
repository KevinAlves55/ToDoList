import { Trash } from "phosphor-react";
import { Check } from "phosphor-react";
import { ITarefa } from "../../App";

import styles from "./Styles.module.css";
import commonStyles from "../../styles/Common.module.css";

interface ITarefaCardProps {
  tarefa: ITarefa;
}

export const TarefaCard: React.FC<ITarefaCardProps> = ({ tarefa }) => {
  return (
    <div className={`${commonStyles} ${styles.conteudoTarefa}`}>
      <label className={styles.tarefaCheck}>
        <input
          type="checkbox"
          checked={tarefa.isCompleted}
        />
        <span>
          <Check size={15} />
        </span>
      </label>

      <strong>{tarefa.title}</strong>

      <button title="Apagar Tarefa" className={styles.apagarTarefa}>
        <Trash />
      </button>
    </div>
  );
};