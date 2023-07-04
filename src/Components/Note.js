import { AiOutlineClose,AiOutlineSetting } from "react-icons/ai";

const Note = (props) => {
  const deleteComponent = () => {
    props.removeComponent(props.id);
  };

  const updateComponent = () => {
    props.updateCom(props.id)
    props.updateCom(props.title)
  }; 
  return (
    <div className="expense-item-new">
      <AiOutlineClose className="btt" onClick={deleteComponent} />
      <AiOutlineSetting className="btt" onClick={updateComponent} />
      <h3>{props.title}</h3>
    </div>
  );
};
export default Note;
