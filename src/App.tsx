import React, { useState } from "react";

import Button, { ButtonTypes } from "./Components/Button";
import UserName from "./Components/UserName";
import { CloseIcon, BurgerClosedIcon } from "./Assets/icons";
import Title from "./Components/Title";
import TabsList from "./Components/TabsList";
import Input from "./Components/Input";

//@ts-ignore
import styles from "./App.module.css";

const App = () => {
    const [isOpened, setOpened] = useState(false);

    const [inputValue, setInputValue] = useState("");

    const onChange = (value: string) => {
        setInputValue(value);
      };

    return (

        <div className={styles.container}>
            <Button
                title={"Primary"}
                type={ButtonTypes.Primary}
                onClick={() => alert("Primary")}
            />
            <Button
                title={"Secondary"}
                type={ButtonTypes.Secondary}
                onClick={() => alert("Secondary")}
            />
            <Button
                title={"Error"}
                type={ButtonTypes.Error}
                onClick={() => alert("Error")}
            />

            <Button
                title={!isOpened ? <BurgerClosedIcon /> : <CloseIcon />}
                type={ButtonTypes.Primary}
                className={styles.burgerButton}
                onClick={() => setOpened(!isOpened)}
            />

            <UserName username={"Artem_Malkin"} />

            <Title title={"title"} />

            <TabsList />

            <Input 
            value={inputValue}
            onChange={onChange}
            placeholder={"placeholder"}
            title={"Title"}
            error={"error"} 
            //disabled
            />

        </div>
    );
};

export default App;
