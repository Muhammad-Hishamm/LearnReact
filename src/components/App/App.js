import React, { useState, useRef } from "react";
import "./App.css";
import Card from "../Card/Card";
import Filter from "../filter/Filter";

function App() {
  const inputRef = useRef(null);
  const [showToggle, setShowtoggle] = useState(1);
  const [state, setState] = useState([
    {
      id:'1',
      name: "Ahmed",
      Age: "30",
      Address: "Nasr city",
      phone: "595887",
      type: "boy"
    },
    {
      id:'2',
      name: "saso",
      Age: "42",
      Address: "New jursi",
      phone: "45484554",
      type: "girl"
    },
    {
      id:'3',
      name: "Muhammad",
      Age: "22",
      Address: "New Cairo",
      phone: "45484554",
      type: "boy"
    },
    {
      id:'4',
      name: "Bola",
      Age: "42",
      Address: "New jursi",
      phone: "45484554",
      type: "girl"
    },

  ]);
  const deleteHandeller = (e, id) => {
    setState((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  };

  const filterHandler = (name) => {
    setState((prevState) => {
      return prevState.filter((el) => el.name.includes(name));
    });
  };

  const unFilterHandler = () => {
    setState((prevState) => {
      return prevState.filter((el) => el.name !== "");
    });
    console.log("undooooooooooooooo")
  }

  const toggleHandeler = () => {
    setShowtoggle(!showToggle);
    console.log(showToggle);
  };

  const inputhandler = () => {
    console.log("sfdsf");
    console.log(inputRef.current.value);
  };


  return (
    <div className="App">
      <h1>Boys</h1>

      <button
        style={{ marginBottom: "20px", cursor: "pointer" }}
        onClick={toggleHandeler}
      >
        Show elements
      </button>

      <Filter filter={filterHandler} undo={unFilterHandler} ></Filter>

      <div className={showToggle ? "show" : "hide"}>
        <Card props={state} deletee={deleteHandeller} />
      </div>

    </div>
  );
}

export default App;
