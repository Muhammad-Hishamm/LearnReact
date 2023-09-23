import React, { useState } from "react";
import styles from "./Filter.module.css";
import Card from "../Card/Card";

const Filter = ( props ) => {
  const [filtered, setFilter] = useState("");

  const filterfun = (e) => {
    const name = e.target.value;
    setFilter(name)
  }


  return (
    <div className={styles.filterWraper}>
      <input
        type="text"
        placeholder="Filter by name"
        value={filtered}
        onChange={filterfun}
      />
      <button className={styles.filterBtn} onClick={() => props.filter(filtered)}>Filter</button>
      <button className={styles.filterBtn} onClick={props.undo} >UnFilter</button>
    </div>
  );
};

export default Filter;
