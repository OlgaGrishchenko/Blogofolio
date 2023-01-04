import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./FormContainer.module.css";
import { NavLink } from "react-router-dom";
import { PathNames } from "../../Pages/Router/Router";

type FormContainerProps = {
   title: string;
   children: ReactElement;
};

const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.container, {
            [styles.darkContainer]: theme === Theme.Dark,
         })}
      >
         <div>
            <div className={styles.divGoBackButton}>
            <NavLink to={PathNames.Home} className={styles.goBackButton}>{"Back to home"}</NavLink>
               </div>
               <div className={styles.title}>{title}</div>
         </div>

         <div className={styles.formContainer}>{children}</div>
      </div>
   );
};

export default FormContainer;
