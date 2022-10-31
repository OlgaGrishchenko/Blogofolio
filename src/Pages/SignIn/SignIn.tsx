import React, { useState } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";

//@ts-ignore
import styles from "./SignIn.module.css";

const SignIn = () => {

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   
   return (
      <FormContainer title={"Sign In"}>
            <>
            <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
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
          {"Don’t have an account?"} <span className={styles.span}>{"Sign Up"}</span>
        </div>
            </>
        </FormContainer>
    );
};

export default SignIn;
