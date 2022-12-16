import { ITarefa } from "../../App";
import { TarefaCard } from "../tarefaCard/Tarefa";

import styles from "./Styles.module.css";
import commonStyles from "../../styles/Common.module.css";

interface ITarefasProps {
  tarefas: ITarefa[];
}

export const Tarefas: React.FC<ITarefasProps> = ({ tarefas }) => {
  const tarefasCriadas = tarefas.length;
  const tarefasConcluidas = tarefas.filter(tarefaAtual => tarefaAtual.isCompleted).length;

  return (
    <main className={`${commonStyles.container} ${styles.mainToDoList}`}>
      <header className={styles.progressoDeConlusao}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tarefasCriadas}</span>
        </div>

        <div>
          <p className={styles.textoRoxo}>Concluídas</p>
          <span>{tarefasConcluidas} de {tarefasCriadas}</span>
        </div>
      </header>

      <div className={styles.conteudoTarefas}>
        {tarefas.map(tarefaAtual => (
          <TarefaCard key={tarefaAtual.id} tarefa={tarefaAtual} />
        ))}

        {/* <div className={styles.semTarefas}>
          <img src="/clipboard.svg" alt="Mochila" title="Adicine uma tarefa" />
          <p><span className={styles.destaque}>Você ainda não tem tarefas cadastradas</span> <br /> Crie tarefas e organize seus itens a fazer</p>
        </div> */}
      </div>
    </main>
  );
};