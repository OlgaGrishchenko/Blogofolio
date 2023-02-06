import React from "react";
import styles from "./Footer.module.css";
import { useThemeContext } from "../../Context/Theme";
import classNames from "classnames";
import { Theme } from "../../Constants/@types";

const Footer = () => {
   
   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.container, {
         [styles.darkContainer]: theme === Theme.Dark,
         })}
      >
         <div>©2022 Blogfolio</div>
         <div>All rights reserved</div>
      </div>
   );
};

export default Footer;
