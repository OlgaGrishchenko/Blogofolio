import React, { FC } from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme, Tabs } from "../../Constants/@types";

import styles from "./TabsList.module.css";
import classNames from "classnames";

type TabProps = {
   activeTab: Tabs;
   onSelectTab: (tab: Tabs) => void;
};

const TABS_NAMES = [
   { name: "All", key: Tabs.All },
   { name: "My Favourites", key: Tabs.Favourites },
   { name: "Popular", key: Tabs.Popular }
];

export const TabsList: FC<TabProps> = ({ activeTab, onSelectTab }) => {

   const { theme } = useThemeContext();

   return <div  className={classNames(styles.container, {
      [styles.darkContainer]: theme === Theme.Dark,
   })}>
      { TABS_NAMES.map(tab => {
         return <div 
      key={tab.key}
      onClick={ () => onSelectTab(tab.key)}
      className={classNames([styles.tab, {[styles.activeTab] : tab.key === activeTab}])}
         >
            { tab.name }
         </div>;
      })}
   </div>
}

export default TabsList;