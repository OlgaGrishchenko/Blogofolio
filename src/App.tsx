import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./index.css";

import { store } from "./Redux/store";

import styles from "./App.module.css";
import CardsList from "./Components/CardsList";
import { CardType } from "./Constants/@types";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Success from "./Pages/Success";
import ResetPassword from "./Pages/ResetPassword";
import RegistrationConfirmation from "./Pages/RegistrationConfirmation";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import { Theme } from "./Constants/@types";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import Footer from "./Components/Footer";
import NewPassword from "./Pages/NewPassword";
import Textarea from "./Components/TextArea/Textarea";
import Router from "./Pages/Router";
import ContentPage from "./Pages/ContentPage";

import { setTheme } from "./Redux/Reducers/themeReducer";
import ThemeSelectors from "./Redux/Selectors/themeSelectors";

const App = () => {
    const dispatch = useDispatch();
    const theme = useSelector(ThemeSelectors.getTheme);
  // const theme = useSelector((state: RootState) => state.themeReducer.theme);

    //const [theme, any] = useState(Theme.Dark);

    const onChangeTheme = (value: Theme) => {
        dispatch(setTheme(value));

        // dispatch - это руки, которые несут что-то в редакс,
        // setTheme - куда эти руки что-то несут,
        // value === payload -> что руки куда-то несут

      };

    return (
        <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
            <Router />
        </ThemeProvider>
    );
};

const AppWithStore = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppWithStore;
