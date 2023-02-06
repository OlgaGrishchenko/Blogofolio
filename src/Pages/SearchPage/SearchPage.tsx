import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import CardsList from "../../Components/CardsList";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";

import { getPosts, getSearchedPosts } from "../../Redux/Reducers/postsReducer";

import styles from "./SearchPage.module.css";
import { PER_PAGE } from "../../Constants/consts";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Lottie from "react-lottie";
import * as animationData from "../../Assets/loading.json";

const SearchPage = () => {
const { theme } = useThemeContext();

const dispatch = useDispatch();
const posts = useSelector(PostsSelectors.getSearchedPosts);
const [currentPage, setCurrentPage] = useState(1);

const totalCount = useSelector(PostsSelectors.getSearchedTotalCount);

const {searchString} = useParams();

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

useEffect(() => {
    const offset = PER_PAGE * (currentPage - 1);
        dispatch(getSearchedPosts({ offset, search: searchString, isOverwrite: false }));
}, [currentPage]);

const onScroll = () => {
    setCurrentPage(currentPage + 1)
}

const hasMore = posts.length < totalCount;

    return (
        <div className={styles.container}>
            <div
                className={classNames(styles.pageTitle, {
                    [styles.darkPageTitle]: theme === Theme.Dark,
                })}
            >
                {`Search results: ${searchString}`}
            </div>

            <InfiniteScroll
                next={onScroll}
                hasMore={hasMore}
                dataLength={posts.length}
                loader={<h1>{"LOADING"} <Lottie options={defaultOptions} height={100} width={100} /></h1>}
                scrollThreshold={0.9}
                
            >
                <CardsList isSearch cardsList={posts} />
            </InfiniteScroll>
        </div>
    );
};

export default SearchPage;
