import classNames from "classnames";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "../../Redux/Reducers/postsReducer";
import { setSelectedImage } from "../../Redux/Reducers/imageReducer";

import { CardType, Theme } from "../../Constants/@types";
import { BookmarkIcon, DislikeIcon, LikeIcon, MoreIcon } from "../../Assets";

import { useThemeContext } from "../../Context/Theme";

import styles from "./Card.module.css";

export enum CardSize {
   Large = "large",
   Medium = "medium",
   Small = "small",
}

type CardProps = {
   card: CardType;
   size: CardSize;
   isFromModal?: boolean;
};

const Card: FC<CardProps> = ({ card, size, isFromModal }) => {
   const { title, text, image, date } = card;

   const dispatch = useDispatch();

   const isLarge = size === CardSize.Large;
   const isMedium = size === CardSize.Medium;
   const isSmall = size === CardSize.Small;

   const onSettingClick = () => {
      dispatch(setSelectedPost(card));
   };

   const onImageClick = () => {
      dispatch(setSelectedImage(image));
    };

   const { theme } = useThemeContext();

   return (
      <div
            className={classNames(styles.container, {
                [styles.mediumContainer]: isMedium, // [styles.mediumContainer]: size === CardSize.Medium
               [styles.smallContainer]: isSmall,
            })}
      >
            <div
               className={classNames(styles.bodyContainer, {
                  [styles.mediumBodyContainer]: isMedium,
                  [styles.smallBodyContainer]: isSmall,
               })}
            >
               <div className={styles.infoContainer}>
                  <div className={styles.headerContainer}>
                     <div className={styles.date}>{date}</div>
                     <div
                        className={classNames(styles.title, {
                           [styles.smallTitle]: !isLarge,
                           [styles.darkTitle]: theme === Theme.Dark,
                        })}
                        >
                           {title}
                        </div>
                  </div>

                  {isLarge && (
                        <div className={styles.description}>{text}</div>
                  )}
               </div>

               <img
                  src={image}
                  alt={"image"}
                  className={classNames(styles.image, {
                     [styles.mediumImage]: isMedium,
                     [styles.smallImage]: isSmall,
                  })}
                  onClick={onImageClick}
               />
            </div>

            <div className={styles.cardFooter}>
               <div className={styles.iconsContainer}>
                  <div
                     className={classNames(styles.iconButton, {
                     [styles.darkIconButton]: theme === Theme.Dark,
                     })}
                  >
                        <LikeIcon />
                  </div>
                  <div className={styles.iconButton}>
                        <DislikeIcon />
                  </div>
               </div>

               <div className={styles.iconsContainer}>
                  <div className={styles.iconButton}>
                        <BookmarkIcon />
                  </div>
                  <div className={styles.iconButton} onClick={!isFromModal ? onSettingClick : undefined}>
                        <MoreIcon />
                  </div>
               </div>
            </div>
      </div>
   );
};

export default Card;
