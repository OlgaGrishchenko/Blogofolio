import React from "react";
import { useLocation } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Button, { ButtonTypes } from "../../Components/Button";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import classNames from "classnames";

//@ts-ignore
import styles from "./RegistrationConfirmation.module.css";

const RegistrationConfirmation = () => {
    const { theme } = useThemeContext();
    const { state } = useLocation();

    return (
        <FormContainer title={"Registration Confirmation"}>
            <>
                <div className={classNames(styles.containerDesc, {
                    [styles.darkContainerDesc]: theme === Theme.Dark,
                })}
                >
                    Please activate your account with the activation <br />
                    link in the email <span>{state?.email || ""}</span>
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

export default RegistrationConfirmation;
