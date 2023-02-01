import React from "react";
import FormContainer from "../../Components/FormContainer";
import Button, {ButtonTypes} from "../../Components/Button";
import { activateUser } from "../../Redux/Reducers/authReducer";
import { PathNames } from "../Router/Router";

import { useThemeContext } from "../../Context/Theme";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Theme } from "../../Constants/@types";
import classNames from "classnames";

import styles from "./Success.module.css";

const Success = () => {
   const { theme } = useThemeContext();
   const { uid, token } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onConfirm = () => {
      if (uid && token) {
         dispatch(
            activateUser({
            data: { uid, token },
            callback: () => {navigate(PathNames.SignIn);
            },
         })
      );
   }
   };

   return (
      <FormContainer title={"Success"}>
         <>

         <div className={classNames(styles.containerDesc, {
                  [styles.darkContainerDesc]: theme === Theme.Dark,
               })}>
         You need to confirm your email.
         <br />
         Please confirm
         </div>

         <Button 
            className={styles.button}
            title={"Confirm"}
            type={ButtonTypes.Primary}
            onClick={onConfirm}
         />

         </>
      </FormContainer>
   )
}

export default Success;