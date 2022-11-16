import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { CardType, Theme } from "../../Constants/@types";
import { BookmarkIcon, DislikeIcon, LikeIcon } from "../../Assets/index";
import Button, { ButtonTypes } from "../../Components/Button";
import { useThemeContext } from "../../Context/Theme";

import styles from "./ContentPage.module.css";

type ContentPageProps = {
    card: CardType;
};

const ContentPage: FC<ContentPageProps> = ({ card }) => {
    const { title, text, image } = card;
    const { theme } = useThemeContext();

    return (
        <div className={styles.container}>

            <div>
                <div className={styles.headerContainer}>
                    <div>{"Home"}</div>
                    <span>|</span>
                    <div className={styles.post}>{"Post 14278"}</div>
                </div>

                <h1 className={styles.title}>{title}</h1>
            </div>

            <img src={image} alt={"image"} className={styles.image} />

            <div className={styles.description}>{text}</div>

            <div className={styles.buttonContainer}>
                <div className={styles.likeContainer}>
                    <Button title={<LikeIcon />} type={ButtonTypes.Secondary} />
                    <Button
                        title={<DislikeIcon />}
                        type={ButtonTypes.Secondary}
                    />
                </div>

                <Button
                    title={<div><BookmarkIcon /> {"Add to favorites"}</div>}
                    type={ButtonTypes.Secondary}
                />
            </div>
        </div>
    );
};

export default ContentPage;
