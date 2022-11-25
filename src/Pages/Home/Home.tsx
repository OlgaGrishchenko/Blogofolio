import React, { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme, Tabs } from "../../Constants/@types";

import CardsList from "../../Components/CardsList";
import TabsList from "../../Components/TabsList";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";

import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";

import styles from "./Home.module.css";

const MOCK_CARD = {
    id: 0,
    image: "https://pibig.info/uploads/posts/2022-03/1648204988_5-pibig-info-p-kvadratnaya-priroda-priroda-krasivo-foto-6.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-11-01",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
};

const MOCK_CARDS_LIST = [
    {
        id: 0,
        image: "https://pibig.info/uploads/posts/2022-03/1648204988_5-pibig-info-p-kvadratnaya-priroda-priroda-krasivo-foto-6.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {
        id: 1,
        image: "https://eurokurort.by/images/fotobank/nation/56/2967_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {
        id: 2,
        image: "https://eurokurort.by/images/fotobank/nation/56/19920_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {
        id: 3,
        image: "https://eurokurort.by/images/fotobank/nation/56/19921_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {
        id: 4,
        image: "https://eurokurort.by/images/fotobank/nation/56/19912_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {
        id: 5,
        image: "https://eurokurort.by/images/fotobank/nation/56/2959_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {
        id: 6,
        image: "https://eurokurort.by/images/fotobank/nation/56/2963_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {   id: 7,
        image: "https://eurokurort.by/images/fotobank/nation/56/2970_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {id: 8,
    image: "https://eurokurort.by/images/fotobank/nation/56/19897_big.jpg",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "2022-11-01",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0,
    },
    {
        id: 9,
        image: "https://eurokurort.by/images/fotobank/nation/56/19894_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
    {
        id: 10,
        image: "https://eurokurort.by/images/fotobank/nation/56/19896_big.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "2022-11-01",
        lesson_num: 0,
        title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
        author: 0,
    },
];

const Home = () => {
    const { theme } = useThemeContext();

    const [activeTab, setActiveTab] = useState(Tabs.All);
    const onTabClick = (tab: Tabs) => {
        setActiveTab(tab)
    };

    const likedPosts = useSelector(PostsSelectors.getLikedPosts);
    const savedPosts = useSelector(PostsSelectors.getSavedPosts);

    const cardsArray = () => {
        if (activeTab === Tabs.Popular) {
            return likedPosts;
        } else if (activeTab === Tabs.Favourites) {
            return savedPosts;
        } else {
            return MOCK_CARDS_LIST;
        }
    };

    return (
        <div className={styles.container}>
            <div
                className={classNames(styles.pageTitle, {
                    [styles.darkPageTitle]: theme === Theme.Dark,
                })}
            >
                {"Blog"}
            </div>
            <TabsList activeTab={activeTab} onSelectTab={onTabClick}/>
            <CardsList cardsList={cardsArray()} />
            <SelectedPostModal />
            <SelectedImageModal />
        </div>
    );
};

export default Home;
