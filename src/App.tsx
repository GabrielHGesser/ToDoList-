import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import uuid from "react-uuid";

import prancheta from "./assets/prancheta.svg";

export interface ITasks {
  id: string;
  description: string;
  completed: boolean;
}

export const App = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const completedTasks = tasks.filter((task) => task.completed).length;

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function createNewTask(description: string) {
    const newTasks = [
      ...tasks,
      {
        id: uuid(),
        description: description,
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <div className="w-full  min-h-screen bg-gray_600">
      {/* --- Header --- */}
      <Header />
      {/* --- --- --- --- */}

      {/* --- Main --- */}
      <main className="mx-auto max-w-[46rem] pb-20">
        <section className="mt-[-1.6875rem]">
          <Input onTasks={createNewTask} />
        </section>
        <section className="mt-16">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <p className="text-blue font-bold text-sm">Tarefas criadas</p>
              <div>
                <span className=" bg-gray_400 px-2 py-[2px] rounded-full text-gray_200 font-bold text-xs">
                  {tasks.length}
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-purple font-bold text-sm">Concluídas</p>
              <div>
                <span className=" bg-gray_400 px-2 py-[2px] rounded-full text-gray_200 font-bold text-xs">
                  {`${completedTasks} de ${tasks.length}`}
                </span>
              </div>
            </div>
          </div>
          {tasks.length <= 0 ? (
            <div className="mt-6 py-16 px-6 rounded-md border-t border-gray_200">
              <div className="text-center w-[688px] h-[116px] flex item-center justify-center flex-col gap-4">
                <img className="mx-auto w-14 h-14" src={prancheta} alt="" />
                <div>
                  <h1 className="text-gray_300 text-base font-bold">
                    Você ainda não tem tarefas cadastradas
                  </h1>
                  <p className="text-gray_300 text-base">
                    Crie tarefas e organize seus itens a fazer
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 flex flex-col gap-3">
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onComplete={toggleTaskCompletedById}
                    onDelete={deleteTask}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>
      {/* --- --- --- --- */}
    </div>
  );
};
