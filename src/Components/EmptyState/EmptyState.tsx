import React from "react";

import { VscSearch } from "react-icons/vsc";
import styles from "./EmptyState.module.css";

const EmptyState = () => {
  return (
    <div className={styles.container}>
      <div><VscSearch className={styles.image} /></div>
      <div className={styles.description}>{"Not found"}</div>
    </div>
  );
};

export default EmptyState;