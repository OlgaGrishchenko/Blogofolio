import React from "react";
import FormContainer from "../../Components/FormContainer";
import Button, { ButtonTypes } from "../../Components/Button";

//@ts-ignore
import styles from "./RegistrationConfirmation.module.css";

const Success = () => {
    return (
        <FormContainer title={"Registration Confirmation"}>
            <>
                <div className={styles.containerDesc}>
                    Please activate your account with the activation <br />
                    link in the email <span>example@gmail.com.</span>
                    <br />
                    Please, check your email
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

export default Success;
