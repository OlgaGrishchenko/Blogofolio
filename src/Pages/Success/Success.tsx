import React from "react";
import FormContainer from "../../Components/FormContainer";
import Button, {ButtonTypes} from "../../Components/Button";

//@ts-ignore
import styles from "./Success.module.css";

const Success = () => {
   return (
      <FormContainer title={"Success"}>
         <>

         <div className={styles.containerDesc}>
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