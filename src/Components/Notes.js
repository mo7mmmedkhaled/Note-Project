import Note from "./Note";
import "./Note.css";

const Notes = ({ id, title, removeComponent, updateComponent }) => {
  const removeComponente = (id) => {
    removeComponent(id);
  };

  const updateCom = (id, title) => {
    updateComponent(id, title)
  };
  return (
    <div>
      <Note id={id} title={title} removeComponent={removeComponente} updateCom={updateCom} ></Note>
    </div>
  );
};

export default Notes;
