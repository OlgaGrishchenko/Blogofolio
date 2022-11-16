import React, { useState } from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

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
   const { theme } = useThemeContext();

   return <div  className={classNames(styles.container, {
      [styles.darkContainer]: theme === Theme.Dark,
   })}>
      { TABS_NAMES.map(tab => {
         return <div 
      key={tab.key}
      onClick={ () => onTabClick(tab.key)}
      className={classNames([styles.tab, {[styles.activeTab] : tab.key === activeTab}])}
      >{ tab.name }</div>;
      })}
   </div>
}

export default TabsList;