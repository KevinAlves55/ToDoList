import { useState } from "react";

import uuid from "react-uuid";

import { Header, Tarefas } from "./components/index";

export interface ITarefa {
  id: string,
  title: string;
  isCompleted: boolean;
}

export const App = () => {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  const adicionarTarefa = (titleValue: string) => {
    const novaTarefa = {
      id: uuid(),
      title: titleValue,
      isCompleted: false
    }

    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <>
      <Header adicionarTarefa={adicionarTarefa} />
      <Tarefas tarefas={tarefas} />
    </>
  )
}