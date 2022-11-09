import React, { useState, useRef, useEffect } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

//@ts-ignore
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {

   const { theme } = useThemeContext();

   const [login, setLogin] = useState('')

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
   
   return (
      <FormContainer title={"Reset password"}>
            <>
            <div className={classNames(styles.containerDesc, {
                    [styles.darkContainerDesc]: theme === Theme.Dark,
                 })}>
               You will receive an email <span>example@gmail.com.</span> with a link to reset your password!
            </div>

            <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
                  ref={inputRef}
               />
            </div>

               <Button
          className={styles.button}
          title={"Go to home"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
        />
            </>
        </FormContainer>
    );
};

export default ResetPassword;