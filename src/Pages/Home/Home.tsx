import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme, Tabs } from "../../Constants/@types";

import CardsList from "../../Components/CardsList";
import TabsList from "../../Components/TabsList";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";

import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";

import { getPosts } from "../../Redux/Reducers/postsReducer";
import styles from "./Home.module.css";
import { PER_PAGE } from "../../Constants/constants";

const MOCK_CARD = {
    id: 0,
    image: "https://pibig.info/uploads/posts/2022-03/1648204988_5-pibig-info-p-kvadratnaya-priroda-priroda-krasivo-foto-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-11-01",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
};

const Home = () => {
    const { theme } = useThemeContext();

    const dispatch = useDispatch();
    const allPosts = useSelector(PostsSelectors.getAllPosts);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const offset = PER_PAGE * (currentPage - 1)
        dispatch(getPosts({offset}));
    }, [currentPage]);

    const [activeTab, setActiveTab] = useState(Tabs.All);
    const onTabClick = (tab: Tabs) => {
        setActiveTab(tab);

    const likedPosts = useSelector(PostsSelectors.getLikedPosts);
    const savedPosts = useSelector(PostsSelectors.getSavedPosts);
    const totalCount = useSelector(PostsSelectors.getTotalCount);
    const totalPagesCount = Math.ceil(totalCount/PER_PAGE);
    
    const pages = Array.from(Array(totalPagesCount).keys());

    const cardsArray = () => {
        if (activeTab === Tabs.Popular) {
            return likedPosts;
        } else if (activeTab === Tabs.Favourites) {
            return savedPosts;
        } else {
            return allPosts;
        }
    };

    const onPageChange = (page:number) => () => setCurrentPage(page);
    return (
        <div className={styles.container}>
            <div
                className={classNames(styles.pageTitle, {
                    [styles.darkPageTitle]: theme === Theme.Dark,
                })}
            >
                {"Blog"}
            </div>
            <TabsList activeTab={activeTab} onSelectTab={onTabClick} />
            <CardsList cardsList={cardsArray()} />
            <div className={styles.pagination}>
                <div onClick={currentPage !==1 ? onPageChange(currentPage-1) : undefined}>← Prev</div>
                <div className={styles.pageNumber}>{pages.map(i => (<div onClick={onPageChange(i+1)} key={i} className={classNames({[styles.activePage]:(i+1)===currentPage})}> {i+1} </div>))}</div>
                <div onClick={currentPage !==totalPagesCount ?onPageChange(currentPage+1) : undefined}>Next →</div>
            </div>
            <SelectedPostModal />
            <SelectedImageModal />
        </div>
    );
};

export default Home;
