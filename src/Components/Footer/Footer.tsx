import React from "react";
//@ts-ignore
import styles from "./Footer.module.css"
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";
import classNames from "classnames";

const Footer = () => {
   const { theme } = useThemeContext();
   return (
      <div className={classNames(styles.container, {
         [styles.darkContainer]: theme === Theme.Dark,
      })}>
      <div className={styles.footer}>
            <div>©2022 Blogfolio</div>
            <div>All rights reserved</div>
      </div>
      </div>
   );
};

export default Footer;
