import React, { useState } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";

//@ts-ignore
import styles from "./SignUp.module.css";

const SignUp = () => {

   const [name, setName] = useState("");
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   
   return (
      <FormContainer title={"Sign Up"}>
            <>
            <div className={styles.inputsContainer}>
               
               <Input
                  title={"Name"}
                  value={name}
                  onChange={(value) => setName(value)}
                  placeholder={"Your name"}
               />
               
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

               <Input
                  title={"Confirm password"}
                  value={confirmPassword}
                  onChange={(value:string) => setConfirmPassword(value)}
                  placeholder={"Confirm password"}
               />
            </div>
               
               <Button
         className={styles.button}
         title={"Sign Up"}
         type={ButtonTypes.Primary}
         onClick={() => {}}
      />
      <div className={styles.signContainer}>
         {"Already have an account?"} <span className={styles.span}>{"Sign In"}</span>
      </div>
            </>
      </FormContainer>
   );
};

export default SignUp;