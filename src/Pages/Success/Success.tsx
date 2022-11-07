import React from "react";
import FormContainer from "../../Components/FormContainer";
import Button, {ButtonTypes} from "../../Components/Button";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import classNames from "classnames";

//@ts-ignore
import styles from "./Success.module.css";

const Success = () => {
   const { theme } = useThemeContext();
   return (
      <FormContainer title={"Success"}>
         <>

         <div className={classNames(styles.containerDesc, {
                    [styles.darkContainerDesc]: theme === Theme.Dark,
                 })}>
         Email confirmed.
         <br />
         Your registration is now completed
         </div>

         <Button 
          className={styles.button}
          title={"Go to home"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
          />

         </>
      </FormContainer>
   )
}

export default Success;