import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme, Tabs, Order } from "../../Constants/@types";

import CardsList from "../../Components/CardsList";
import TabsList from "../../Components/TabsList";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";

import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";

import { getMyPosts, getPosts } from "../../Redux/Reducers/postsReducer";
import styles from "./Home.module.css";
import AuthSelectors from "../../Redux/Selectors/authSelectors";
import { PER_PAGE } from "../../Constants/consts";
import Loader from "../../Components/Loader";
import Button, { ButtonTypes } from "../../Components/Button";

const Home = () => {
    const { theme } = useThemeContext();

    const [activeTab, setActiveTab] = useState(Tabs.All);
    const onTabClick = (tab: Tabs) => {
        setActiveTab(tab);
    };

    const [ordering, setOrdering] = useState("");

    const onClickOrdering = (order: Order) => () => {
        if (ordering === order) {
            setOrdering("");
        } else setOrdering(order);
        setCurrentPage(1);
    };

    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const allPosts = useSelector(PostsSelectors.getAllPosts);
    const myPosts = useSelector(PostsSelectors.getMyPosts);
    
    const likedPosts = useSelector(PostsSelectors.getLikedPosts);
    const savedPosts = useSelector(PostsSelectors.getSavedPosts);

    const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

    const isLoading = useSelector(PostsSelectors.getPostsLoading);

    const totalCount = useSelector(PostsSelectors.getTotalCount);
    const totalPagesCount = Math.ceil(totalCount/PER_PAGE);
    const pages = Array.from(Array(totalPagesCount).keys());
    const onPageChange = (page: number) => () => setCurrentPage(page);

    const cardsArray = () => {
        if (activeTab === Tabs.Popular) {
            return likedPosts;
        } else if (activeTab === Tabs.Favourites) {
            return savedPosts;
        } else if (activeTab === Tabs.MyPosts) {
            return myPosts;
        } else {
            return allPosts;
        }
    };

    useEffect(() => {
        const offset = PER_PAGE * (currentPage - 1)
        
        if (activeTab === Tabs.MyPosts) {
            dispatch(getMyPosts());
        } else {
            dispatch(getPosts({ offset, ordering, isOverwrite: true}));
        }
    }, [activeTab, currentPage, ordering]);

    const TABS_NAMES = useMemo ( () => [
        { name: "All", key: Tabs.All },
        ...(isLoggedIn
            ? [
                { name: "My Posts", key: Tabs.MyPosts },
                { name: "My Favourites", key: Tabs.Favourites },
            ]
            : []),
        { name: "Popular", key: Tabs.Popular }
    ], [isLoggedIn]);

    return (
        <div className={styles.container}>
            <div
                className={classNames(styles.pageTitle, {
                    [styles.darkPageTitle]: theme === Theme.Dark,
                })}
            >
                {"Blog"}
            </div>
            
            {!isLoading ? (
            <>
            <TabsList activeTab={activeTab} onSelectTab={onTabClick} tabsList={TABS_NAMES}/>
            <div className={styles.ordering}>
                <Button 
                    className={classNames(styles.button, {
                        [styles.buttonClicked]: ordering === Order.Date,
                    })}
                    title={"Date"}
                    type={ButtonTypes.Secondary}
                    onClick={onClickOrdering(Order.Date)}
                />

                <Button 
                    className={classNames(styles.button, {
                        [styles.buttonClicked]: ordering === Order.Title,
                    })}
                    title={"Title"}
                    type={ButtonTypes.Secondary}
                    onClick={onClickOrdering(Order.Title)}
                />
            </div>
            <CardsList cardsList={cardsArray()} />
            <div className={styles.pagination}>
                <div onClick={currentPage !==1 ? onPageChange(currentPage-1) : undefined}>← Prev</div>
                <div className={styles.pageNumber}>
                    {pages.map(i => (<div onClick={onPageChange(i+1)} key={i} className={classNames(styles.page, {[styles.activePage]: i + 1 === currentPage})}> {i+1} </div>))}
                </div>
                <div onClick={currentPage !==totalPagesCount ?onPageChange(currentPage+1) : undefined}>Next →</div>
            </div>
            <SelectedPostModal />
            <SelectedImageModal />
            </>
            ) : (
        <Loader />
        )}
        </div>
    );
};

export default Home;
