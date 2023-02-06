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
import { useDispatch } from "react-redux";
import { getSearchedPosts } from "../../Redux/Reducers/postsReducer";
import { getValue } from "@testing-library/user-event/dist/utils";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isOpened, setOpened] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const [search, setSearch] = useState("");

    const isLoggedIn = false;

    const onBurgerClick = () => {
        setOpened(!isOpened);
    };

    const onLogInButton = () => {
        navigate(PathNames.SignIn);
    };

    const onSearchClick = () => {
        if (isClicked) {
            dispatch(getSearchedPosts( {offset: 0, search, isOverwrite: true } ))
            navigate(`search/${search}`);
        }
        setClicked(!isClicked);
        setSearch("");
    };

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
