import React, { FC } from "react";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { setLikeStatus, setSelectedPost, setSavedPosts } from "../../Redux/Reducers/postsReducer";
import { setSelectedImage } from "../../Redux/Reducers/imageReducer";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";

import { CardType, Theme, LikeStatus } from "../../Constants/@types";
import { BookmarkIcon, DislikeIcon, LikeIcon, MoreIcon, BookmarkSelectIcon } from "../../Assets";

import { useThemeContext } from "../../Context/Theme";
import { useNavigate } from "react-router-dom";

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
   const { title, text, image, date, id } = card;

   const dispatch = useDispatch();

   const navigate = useNavigate();

  const onTitleClick = () => {
    navigate(`/content/${id}`);
  };

   const likedPosts = useSelector(PostsSelectors.getLikedPosts);
   const dislikedPosts = useSelector(PostsSelectors.getDislikedPosts);
   const isLiked = likedPosts.findIndex((post) => post.id === card.id) > -1;
   const isDisliked =
    dislikedPosts.findIndex((post) => post.id === card.id) > -1;
   const savedPosts = useSelector(PostsSelectors.getSavedPosts);
   const isSaved = savedPosts.findIndex((post) => post.id === card.id) > -1

   const isLarge = size === CardSize.Large;
   const isMedium = size === CardSize.Medium;
   const isSmall = size === CardSize.Small;

   const onSettingClick = () => {
      dispatch(setSelectedPost(card));
   };

   const onImageClick = () => {
      dispatch(setSelectedImage(image));
   };

   const onStatusClick = (likeStatus: LikeStatus) => () => {
      dispatch(setLikeStatus({ card, likeStatus }));
   };

   const onSaveClick = () => {
      dispatch(setSavedPosts(card));
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
                        onClick={onTitleClick}
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
                     onClick={onStatusClick(LikeStatus.Like)}
                  >
                        <LikeIcon /> {isLiked && <span> 1</span>}
                  </div>

                  <div className={classNames(styles.iconButton, {
                     [styles.darkIconButton]: theme === Theme.Dark,
                     })}
                  onClick={onStatusClick(LikeStatus.Dislike)}
                  >
                        <DislikeIcon /> {isDisliked && <span> 1</span>}
                  </div>
               </div>

               <div className={styles.iconsContainer}>

                  <div className={classNames(styles.iconButton, {
                     [styles.darkIconButton]: theme === Theme.Dark,
                     })}
                  onClick={onSaveClick}>
                        {isSaved ? <BookmarkSelectIcon /> : <BookmarkIcon />}
                  </div>

                  <div className={classNames(styles.iconButton, {
                     [styles.darkIconButton]: theme === Theme.Dark,
                     })} onClick={!isFromModal ? onSettingClick : undefined}>
                        <MoreIcon />
                  </div>
               </div>
            </div>
      </div>
   );
};

export default Card;
