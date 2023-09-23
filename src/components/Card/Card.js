import React from "react";
import styles from "./Card.module.css"

 const Card =({props,deletee})=>{
    
  const card = props.map(({name,Age,Address,phone,type,id}) => (
    <div className={styles.wraper} key={id} style={{backgroundColor:(type==="boy")?"green":"pink"}}>
      <div> Name : {name} </div>
      <div> Age : {Age} </div>
      <div> Phone : {phone} </div>
      <div> Adress :{Address} </div>
      <div className={styles.deleteBtn} onClick={(e)=>deletee(e,id)}>x</div>
    </div>
  ));
  
    return (
        <>
            {card}
        </>
    )
 };

 export default Card; 