import React, { useState, useRef, useEffect } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

//@ts-ignore
import styles from "./ResetPassword.module.css";
import { sendResetEmail } from "../../Redux/Reducers/authReducer";
import { useDispatch } from "react-redux";

const ResetPassword = () => {

   const dispatch = useDispatch();
   const { theme } = useThemeContext();

   const [email, setEmail] = useState('');
   const [isSent, setSent] = useState(false);

   const inputRef = useRef<HTMLInputElement>(null);

   const OnSend = () => {
      dispatch(sendResetEmail( { email, callback: () => setSent(!isSent) } ))
   }

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, []);
   
   return (
      <FormContainer title={"Reset password"}>
            <>
            {!isSent ? (
               <>
               <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={email}
                  onChange={(value) => setEmail(value)}
                  placeholder={"Your email"}
                  ref={inputRef}
               />
            </div>

               <Button
          className={styles.button}
          title={"Reset"}
          type={ButtonTypes.Primary}
          onClick={OnSend}
        />
               </>) : (
                  <div className={classNames(styles.containerDesc, {
                     [styles.darkContainerDesc]: theme === Theme.Dark,
                  })}>
                You will receive an email <span>example@gmail.com.</span> with a link to reset your password!
             </div>
               ) }
            

            
            </>
        </FormContainer>
    );
};


export default ResetPassword;