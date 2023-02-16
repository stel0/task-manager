import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [ ]);

  function createTask(titleTask, descriptionTask) {
    setTasks([
      ...tasks,
      {
        title: titleTask,
        id: tasks.length,
        description: descriptionTask,
      },
    ]);
  }

  const [editItem, setEditItem] = useState(null);

  const findTask = (id,s) => {
    const task = tasks.find((task) => task.id === id);
    setEditItem(task);
    togglePopUp(s);
  };

  const editTask = (title, description, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, description, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const [isOpen, setIsOpen] = useState(false)
  function togglePopUp(s){ 
    setIsOpen(s);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        findTask,
        editTask,
        editItem,
        isOpen,
        togglePopUp
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
