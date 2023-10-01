import React, { Children } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import AddUser from "../AddUser/AddUser";

const BackDrop = ({ closeModal }) => (
  <div onClick={closeModal} className={styles.backDrop}></div>
);

const Overlay = ({children}) => (
  <div className={styles.overlay}>
    {children}
  </div>
);

const Modal = ({ show, closeModal,AddCard }) => {
  return (
    show && (
      <>
        {ReactDOM.createPortal(
          <>
            <BackDrop closeModal={closeModal} />
            <Overlay >
              <AddUser AddCard={AddCard} closeModal={closeModal} ></AddUser>
            </Overlay>
          </>,
          document.getElementById("modal")
        )}
      </>
    )
  );
};

export default Modal;
