import React, { useState } from "react";
import styles from "./FilterInput.module.css";
import Button from "../Layout/Button";

const FilterInput = ({ props }) => {
  const [filtered, setFilter] = useState("");

  const filterfun = (e) => {
    const name = e.target.value;
    setFilter(name);
  };

  return (
    <div className={styles.filterWraper}>
      <input
        type="text"
        placeholder="Filter by name"
        value={filtered}
        onChange={filterfun}
      />
      <Button
        className={styles.filterBtn}
        style={{ margin: "10px" }}
        onClick={() => props(filtered)}
      >
        Filter
      </Button>
    </div>
  );
};

export default FilterInput;
