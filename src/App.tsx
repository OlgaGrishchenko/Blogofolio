import React, { useEffect, useState } from "react";
import "./index.css";

//@ts-ignore
import styles from "./App.module.css";
import CardsList from "./Components/CardsList";
import { CardType } from "./Constants/@types";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Success from "./Pages/Success";
import ResetPassword from "./Pages/ResetPassword";
import RegistrationConfirmation from "./Pages/RegistrationConfirmation";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import { Theme } from "./Constants/@types"
import ThemeSwitcher from "./Components/ThemeSwitcher";
import Footer from "./Components/Footer";
import NewPassword from "./Pages/NewPassword";
import Textarea from "./Components/TextArea/Textarea";
import Router from "./Pages/Router";
import ContentPage from "./Pages/ContentPage";

const App = () => {
    const [cardsList, setCardsList] = useState<CardType[] | null>(null);

    const [theme, setTheme] = useState(Theme.Dark);

    const onChangeTheme = (value: Theme) => {
        setTheme(value);
    };

    return (
        <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
            <Router />
        </ThemeProvider>
        
    );
};

export default App;
