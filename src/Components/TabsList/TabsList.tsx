import React, { useState } from "react";

//@ts-ignore
import styles from "./TabsList.module.css";
import classNames from "classnames";

export enum Tabs {
    All = "all",
    Favourites = "myFavourites",
    Popular = "popular",
}

const TABS_NAMES = [
    { name: "All", key: Tabs.All },
    { name: "My Favourites", key: Tabs.Favourites },
    { name: "Popular", key: Tabs.Popular }
];

export const TabsList = () => {

   const [activeTab, setActiveTab] = useState(Tabs.All);
   const onTabClick = (tab: Tabs) => {
   setActiveTab(tab)
};

   return <div  className ={styles.container}>
      { TABS_NAMES.map(tab => {
         return <div 
      key={tab.key}
      onClick={ () => onTabClick(tab.key)}
      className={classNames({[styles.activeTab] : tab.key === activeTab}, [styles.tab])}
      >{ tab.name }</div>;
      })}
   </div>
}

export default TabsList;