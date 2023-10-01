import React, { useState, useRef } from "react";
import styles from "./App.module.css";
import Card from "../components/CardList/CardList";
import FilterInput from "../components/FilterInput/FilterInput";
import Modal from "../components/Modal/Modal";
import Button from "../components/Layout/Button";

function App() {
  const inputRef = useRef(null);
  const [showModal, setshowMaodal] = useState(false);
  const [showToggle, setShowtoggle] = useState(1);
  const [state, setState] = useState([
    {
      id: "1",
      name: "Ahmed",
      Age: "30",
      Address: "Nasr city",
      phone: "595887",
      gender: "boy",
    },
    {
      id: "2",
      name: "saso",
      Age: "42",
      Address: "New jursi",
      phone: "45484554",
      gender: "girl",
    },
    {
      id: "3",
      name: "Muhammad",
      Age: "22",
      Address: "New Cairo",
      phone: "45484554",
      gender: "boy",
    },
    {
      id: "4",
      name: "Bola",
      Age: "42",
      Address: "New jursi",
      phone: "45484554",
      gender: "girl",
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

  const toggleHandeler = () => {
    setShowtoggle(!showToggle);
    console.log(showToggle);
  };

  const closeModal = () => {
    setshowMaodal(false);
  };

  const AddCard=(newCard)=>{
    setState((prevState)=>
    [...prevState,newCard]
    )
  }

  return (
    <>
      <div className={styles.App}>
        <div style={{ display: "flex", margin: "20px" }}>
          <Button
            style={{ marginRight: "20px", cursor: "pointer" }}
            onClick={toggleHandeler}
          >
            {!showToggle ? "Show elements" : "Hide elements"}
          </Button>

          <Button onClick={() => setshowMaodal(true)} className={styles.button}>
            New Modal
          </Button>
        </div>

        <h1>List of Data</h1>

        <FilterInput props={filterHandler}></FilterInput>

        <div className={showToggle ? styles.show : styles.hide}>
          <Card props={state} deletee={deleteHandeller} />
        </div>
      </div>

      <Modal show={showModal} closeModal={closeModal} AddCard={AddCard}/>
    </>
  );
}

export default App;
