import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

function EditTaskPopUp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { editItem, editTask, isOpen, togglePopUp } = useContext(TaskContext);

  const handleSubmit = (e) => {
    if (title.length !== 0 && description.length !== 0) {
      editTask(title, description, editItem.id);
      togglePopUp(false);
    }
    e.preventDefault();
    togglePopUp(false);
  };

  // Edit tasks starts

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDescription(editItem.description);
      console.log(editItem);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editItem]);

  //Edit tasks ends

  const handleClose = (e) => {
    if(e.target.id === "container") togglePopUp(false)
  }

  return isOpen ? (
    <div id="container" onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center" >
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 max-w-md absolute ">
        <h1 className="text-2xl font-bold text-white mb-3">
          Actualiza tu tarea
        </h1>
        <input
          placeholder="Actualiza tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Actualiza la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <div>
          <button className="bg-indigo-500 px-3 py-1 text-white block mb-2 rounded-r-lg">
            Guardar edicion
          </button>
          <button className="bg-indigo-500 px-3 py-1 text-white rounded-r-lg">Salir</button>
        </div>
      </form>
    </div>
  ) : (
    console.log("No se muestra")
  );
}

export default EditTaskPopUp;
