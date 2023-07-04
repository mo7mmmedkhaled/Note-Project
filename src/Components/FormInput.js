import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "./FormInput.css";

const FormInput = ({ onPassData }) => {
  const [input, setInput] = useState("");

  const textHandel = (event) => {
    setInput(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    const dataa = { title: input, id: Math.random() };
    if (dataa.title === "") {
      return;
    }
    onPassData(dataa);
    setInput("");
  };

  return (
    <>
      <form onSubmit={submitHandeler} className="formstyle">
          <textarea
            placeholder="Write your note.."
            type="text"
            onChange={textHandel}
            value={input}
          />
        <div>
          <BsPlusCircleFill
            className="addNote"
            type="submit"
            onClick={submitHandeler}
          ></BsPlusCircleFill>
        </div>
      </form>
    </>
  );
};

export default FormInput;
