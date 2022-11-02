import React, { useEffect, useState } from "react";
import "./index.css";

//@ts-ignore
import styles from "./App.module.css";
import CardsList from "./Components/CardsList";
import { CardType } from "./Constants/@types";

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
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
    MOCK_CARD,
];

const App = () => {
    const [cardsList, setCardsList] = useState<CardType[] | null>(null);

    useEffect(() => {
        setCardsList(MOCK_CARDS_LIST);
    }, []);

    return (
        <div className={styles.container}>
            <CardsList cardsList={MOCK_CARDS_LIST} />
        </div>
    );
};

export default App;
