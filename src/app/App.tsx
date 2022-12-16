import { ChangeEvent, FormEvent, useState } from "react";

import uuid from 'react-uuid';
import { PlusCircle } from "phosphor-react";

import { Header, Tarefa } from "./components/index";

import commonStyles from "./styles/Common.module.css";
import styles from "./App.module.css";
import "./styles/Global.css";

interface ITarefa {
  id: string,
  tarefa: string;
  isComplete: boolean;
}

export const App = () => {
  const [textoTarefa, setTextoTarefa] = useState("");
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextoTarefa(e.target.value);
  };

  const handleNewTask = (e: FormEvent) => {
    e.preventDefault();

    const tarefa = {
      id: uuid(),
      tarefa: textoTarefa,
      isComplete: false
    }

    setTarefas([...tarefas, tarefa])
  };

  return (
    <>
      <Header />

      <form onSubmit={handleNewTask} className={`${commonStyles.container} ${styles.barraDeFerramenta}`}>
        <input
          type="text"
          value={textoTarefa}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          required
        />

        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <main className={`${commonStyles.container} ${styles.mainToDoList}`}>
        <div className={styles.progressoDeConlusao}>
          <div className={styles.progressos}>
            <strong className={styles.progressoCriadas}>Tarefas criadas</strong>
            <span>0</span>
          </div>

          <div className={styles.progressos}>
            <strong className={styles.progressoConcluido}>Concluídas</strong>
            <span>0</span>
          </div>
        </div>

        <div className={styles.conteudoTarefas}>
          {tarefas.length > 0 && (
            tarefas.map(tarefaAtual => (
              <Tarefa
                key={tarefaAtual.id}
                tarefa={tarefaAtual.tarefa}
                isComplete={tarefaAtual.isComplete}
              />
            ))
          )}

          {tarefas.length === 0 && (
            <div className={styles.semTarefas}>
              <img src="/clipboard.svg" alt="Mochila" title="Adicine uma tarefa" />
              <p><span className={styles.destaque}>Você ainda não tem tarefas cadastradas</span> <br /> Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}