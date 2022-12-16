import { Trash } from "phosphor-react";
import { Check } from "phosphor-react";

import styles from "./Styles.module.css";

export const Tarefa: React.FC = () => {
  return (
    <div className={styles.conteudoTarefa}>
      <div className={styles.tarefa}>
        <label className={styles.tarefaCheck}>
          <input type="checkbox" />
          <span>
            <Check size={15} />
          </span>
        </label>

        <strong>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</strong>
      </div>

      <button title="Apagar Tarefa" className={styles.apagarTarefa}>
        <Trash />
      </button>
    </div>
  );
};