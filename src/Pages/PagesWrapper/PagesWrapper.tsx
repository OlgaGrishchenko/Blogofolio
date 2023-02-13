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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
};

export default PagesWrapper;