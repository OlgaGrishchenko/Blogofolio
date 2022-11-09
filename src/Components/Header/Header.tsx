import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PathNames } from "../../Pages/Router/Router";

import Button, { ButtonTypes } from "../Button";
import {
    BurgerClosedIcon,
    CloseIcon,
    SearchIcon,
    UserIcon,
} from "../../Assets";
import Input from "../Input";
import UserName from "../UserName";
import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
    const [isOpened, setOpened] = useState(false);

    const onBurgerClick = () => {
        setOpened(!isOpened);
    };

    const [isClicked, setClicked] = useState(false);
    const onSearchClick = () => {
        setClicked(!isClicked);
    };
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const onLogInButton = () => {
        navigate(PathNames.SignIn);
    };

    const isLoggedIn = false;

    return (
        <div className={styles.container}>
            <Button
                title={isOpened ? <CloseIcon /> : <BurgerClosedIcon />}
                onClick={onBurgerClick}
                type={ButtonTypes.Primary}
                className={styles.burgerButton}
            />
            {isOpened && <Menu />}

            <div className={styles.headerLine}>
                <div className={styles.inputContainer}>
                    {isClicked && (
                        <Input
                            value={search}
                            onChange={(value: string) => setSearch(value)}
                            placeholder={"Search..."}
                            className={styles.searchInput}
                        />
                    )}
                </div>

                <div className={styles.headerButtons}>
                    <Button
                        title={<SearchIcon />}
                        onClick={onSearchClick}
                        type={ButtonTypes.Primary}
                        className={styles.burgerButton}
                    />

                    {isLoggedIn ? (
                        <UserName username={"Artem_Malkin"} />
                    ) : (
                        <Button
                            title={<UserIcon />}
                            onClick={onLogInButton}
                            type={ButtonTypes.Primary}
                            className={styles.burgerButton}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
