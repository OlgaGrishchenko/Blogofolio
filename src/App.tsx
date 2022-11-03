import React from "react";

//@ts-ignore
import styles from "./App.module.css";
import ResetPassword from "./Pages/ResetPassword";

const App = () => {
    return (
        <div className={styles.container}>
           <ResetPassword />
        </div>
    );
};

export default App;
