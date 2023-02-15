import React, { useState, useEffect, useRef, useMemo } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, { ButtonTypes } from "../../Components/Button";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import classNames from "classnames";

import styles from "./NewPassword.module.css";
import { useDispatch } from "react-redux";
import { resetPasswordConfirm } from "../../Redux/Reducers/authReducer";
import { useNavigate, useParams } from "react-router";
import { PathNames } from "../Router/Router";

const NewPassword = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { uid, token } = useParams();

   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const inputRef = useRef<HTMLInputElement>(null);

   const isValid = useMemo( () => {
      return password.length > 0 && confirmPassword.length > 0 && password === confirmPassword
   }, [ password, confirmPassword ])

   const OnSetPassword = () => {
      if (uid && token) {
      dispatch(resetPasswordConfirm( { 
         data: {
            uid,
            token,
            new_password: password
         },
         callback: () => navigate(PathNames.SignIn)
      })
      )
   }
   }

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, []);
   
   return (
      <FormContainer title={"New password"}>
            <>
            <div className={styles.inputsContainer}>
               
               <Input
                  title={"Password"}
                  value={password}
                  onChange={(value:string) => setPassword(value)}
                  placeholder={"Your password"}
                  ref={inputRef}
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
         title={"Set password"}
         type={ButtonTypes.Primary}
         onClick={OnSetPassword}
         disabled={!isValid}
      />
            </>
      </FormContainer>
   );
};

export default NewPassword;