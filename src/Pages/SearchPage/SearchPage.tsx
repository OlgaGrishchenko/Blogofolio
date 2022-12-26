import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import CardsList from "../../Components/CardsList";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";

import { getPosts } from "../../Redux/Reducers/postsReducer";

import styles from "./SearchPage.module.css";
import { PER_PAGE } from "../../Constants/consts";
import { useParams } from "react-router";

const SearchPage = () => {
const { theme } = useThemeContext();

const dispatch = useDispatch();
const allPosts = useSelector(PostsSelectors.getAllPosts);
const [currentPage, setCurrentPage] = useState(1);

const totalCount = useSelector(PostsSelectors.getTotalCount);
const totalPagesCount = Math.ceil(totalCount / PER_PAGE);

const pages = Array.from(Array(totalPagesCount).keys());

const onPageChange = (page: number) => () => setCurrentPage(page);

const {searchString} = useParams();

useEffect(() => {
      const offset = PER_PAGE * (currentPage - 1);
    dispatch(getPosts({ offset, search: searchString }));
}, [currentPage, searchString]);

    return (
        <div className={styles.container}>
            <div
                className={classNames(styles.pageTitle, {
                    [styles.darkPageTitle]: theme === Theme.Dark,
                })}
            >
                {"Search results"}
            </div>
            <CardsList cardsList={allPosts} />
            
            
            <div className={styles.pagination}>
                <div
                onClick={
                    currentPage !== 1
                        ? onPageChange(currentPage - 1)
                        : undefined
                }
            >
                ← Prev
            </div>
            <div>
                {pages.map((i) => (
                    <div
                        onClick={onPageChange(i + 1)}
                        key={i}
                        className={classNames({
                            [styles.activePage]: i + 1 === currentPage,
                        })}
                    >
                        {" "}
                        {i + 1}{" "}
                    </div>
                ))}
            </div>
            <div
                onClick={
                    currentPage !== totalPagesCount
                        ? onPageChange(currentPage + 1)
                        : undefined
                }
            >
                Next →
            </div>
            </div>
        </div>
    );
};

export default SearchPage;
