import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, findTask, togglePopUp } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md ">
      <h1 className="truncate text-center uppercase mb-2 text-md sm:text-left sm:text-lg font-bold ">{task.title}</h1>
      <p className="truncate text-zinc-400 border-t border-t-slate-600 bg-gray-700 p-1" >{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 block"
        onClick={() => deleteTask(task.id) }
      >
        Eliminar tarea
      </button>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => findTask(task.id,true)}
      >
        Editar tarea
      </button>
    </div>
  );
}

export default TaskCard;
