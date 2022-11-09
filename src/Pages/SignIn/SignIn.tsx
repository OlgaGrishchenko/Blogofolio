import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import { PathNames } from "../Router/Router";

import styles from "./SignIn.module.css";

const SignIn = () => {

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus(); //если элемент существует, то на элемент, который содержится в этой рефе повесить статус focus
      }
    }, []);
   
   return (
      <FormContainer title={"Sign In"}>
            <>
            <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
                  ref={inputRef}
               />

               <Input
                  title={"Password"}
                  value={password}
                  onChange={(value:string) => setPassword(value)}
                  placeholder={"Your password"}
               />
            </div>
               
               <div className={styles.forgotPassword}>{"Forgot password?"}</div>

               <Button
          className={styles.button}
          title={"Sign In"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
        />
        <div className={styles.signContainer}>
          {"Don’t have an account?"}{" "}
          <NavLink to={PathNames.SignUp} className={styles.redirectButton}>{"Sign Up"}</NavLink>
        </div>
            </>
        </FormContainer>
    );
};

export default SignIn;
