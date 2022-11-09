import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import styles from "./PagesWrapper.module.css";
import { PathNames } from "../Router/Router";
import Home from "../Home";

const PagesWrapper = () => {
  const { pathname } = useLocation();
  const { theme } = useThemeContext();

  return (
    <div
         className={classNames(styles.container, {
            [styles.darkContainer]: theme === Theme.Dark,
         })}
      >
      <Header />
      {pathname === PathNames.Home ? <Home /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default PagesWrapper;