import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate  } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import { PathNames } from "../Router/Router";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Reducers/authReducer";

import styles from "./SignUp.module.css";

const SignUp = () => {

   const [name, setName] = useState("");
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, []);

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const onSignUp = () => {
      dispatch(
         registerUser({
            data: { username: name, password, email: login },
            callback: () =>
            navigate(PathNames.RegistrationConfirmation, {
            state: { email: login },
            }),
         })
      );
   };
   
   return (
      <FormContainer title={"Sign Up"}>
            <>
            <div className={styles.inputsContainer}>
               
               <Input
                  title={"Name"}
                  value={name}
                  onChange={(value) => setName(value)}
                  placeholder={"Your name"}
                  ref={inputRef}
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
         onClick={onSignUp}
      />
      <div className={styles.signContainer}>
         {"Already have an account?"}{" "}
          <NavLink to={PathNames.SignIn} className={styles.redirectButton}>
            {"Sign In"}
          </NavLink>
      </div>
            </>
      </FormContainer>
   );
};

export default SignUp;