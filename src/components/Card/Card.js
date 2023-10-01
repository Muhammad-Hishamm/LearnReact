import React from "react";
import styles from "./Card.module.css"


const Card = ({ id, name, Age, Address, phone, gender, deletee }) => {
  return (
    <div className={styles.wraper} key={id} style={{ backgroundColor: (gender === "boy") ? "green" : "pink" }}>
      <div> Name : {name} </div>
      <div> Age : {Age} </div>
      <div> Phone : {phone} </div>
      <div> Adress :{Address} </div>
      <div> Gender : {gender} </div>
      <div className={styles.deleteBtn} onClick={(e) => deletee(e, id)}>x</div>
    </div>
  );
}

export default Card;