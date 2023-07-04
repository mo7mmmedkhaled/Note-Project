import { useState } from "react";
import FormInput from "./Components/FormInput";
import Notes from "./Components/Notes";
import { BsFillTrash3Fill, BsFileEarmarkTextFill } from "react-icons/bs";
// import EditeContent from "./Components/PopUpComponent/EditeContent";
import "./App.css";

function App() {
  const [oNote, nNote] = useState([]);
  // const [edNote, setEdNote] = useState('')

  const dataPassHundeler = (dataa) => {
    nNote([...oNote, dataa]);
  };
  const removeComponent = (id) => {
    const newArray = oNote.filter((item) => {
      return item.id !== id;
    });
    nNote(newArray);
  };
  // edite button not work yet
  const updateComponent = (id) => {
  console.log(id);
  };

  const clearAllNote = () => {
    nNote([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        Note Your Mind <BsFileEarmarkTextFill className="logoo" />
      </header>
      
      <FormInput onPassData={dataPassHundeler} />
      {oNote.length === 0 ? (
        <h1 className="noNote">You didn't add note yet</h1>
      ) : (
        oNote.map((item) => {
          return (
            <Notes
              key={item.id}
              id={item.id}
              title={item.title}
              removeComponent={removeComponent}
              updateComponent={updateComponent}
            />
          );
        })
      )}
      {/* <div>
        <EditeContent editeNote={edNote} />
      </div> */}
      <BsFillTrash3Fill
        className="clearall"
        onClick={clearAllNote}
      ></BsFillTrash3Fill>
      <div className="navbar">Thank You</div>
    </div>
  );
}

export default App;
