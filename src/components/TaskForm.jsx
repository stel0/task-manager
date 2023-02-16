import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length !== 0 && description.length !== 0) {
      createTask(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="max-w-md mx-auto font-Ubuntu ">
      <form onSubmit={handleSubmit} className="bg-gradient-to-r from-slate-900 p-10 mb-4 border border-slate-700  rounded-lg ">
        <h1 className="text-2xl text-white  decoration-4 mb-4 "><a className="underline decoration-blue-500 underline-offset-4">Crea tu tarea</a></h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          autoFocus
          className="bg-slate-100 shadow-md p-3 w-full mb-2 rounded-t outline-none outline-1 focus:outline-blue-500/80 "
        />
        <textarea
          placeholder="Escribe la direccion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          className="bg-slate-100 shadow-md p-3 w-full mb-2 rounded-b outline-none outline-1 focus:outline-blue-500/80"
        ></textarea>
        <button className="  px-3 py-1 text-white rounded-md   bg-gradient-to-r from-indigo-500 to-indigo-900 hover:to-indigo-700">Guardar tarea
        </button>
      </form>
    </div>
  );
}



export default TaskForm;
