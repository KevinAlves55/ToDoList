import { PlusCircle } from "phosphor-react";

import { Header } from "./components/index";

import commonStyles from "./styles/Common.module.css";
import styles from "./App.module.css";
import "./styles/Global.css";

export const App = () => {
  return (
    <>
      <Header />

      <form className={`${commonStyles.container} ${styles.barraDeFerramenta}`}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <main className={`${commonStyles.container} ${styles.mainToDoList}`}>
        <div className={styles.progressoDeConlusao}>
          <div className={styles.progressos}>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>

          <div className={styles.progressos}>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>

        <div className={styles.conteudoTarefas}>
          <div className={styles.semTarefas}>
            <img src="/clipboard.svg" alt="Mochila" title="Adicine uma tarefa" />
            <p><span className={styles.destaque}>Você ainda não tem tarefas cadastradas</span> <br /> Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </>
  )
}