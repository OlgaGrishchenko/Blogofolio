import React, { FC } from "react";
import { useThemeContext } from "../../Context/Theme";
import { Theme, Tabs } from "../../Constants/@types";

import styles from "./TabsList.module.css";
import classNames from "classnames";

type TabProps = {
   activeTab: Tabs;
   onSelectTab: (tab: Tabs) => void;
   disabled?: boolean;
   tabsList: Array<{ name: string; key: Tabs }>;
};



const TabsList: FC<TabProps> = ({
   disabled,
   activeTab,
   onSelectTab,
   tabsList,
}) => {

   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.tabs, {
         [styles.darkContainer]: theme === Theme.Dark,
         })}
      >
         {tabsList.map((tab) => {
            return (
               <div
                  key={tab.key}
                  onClick={() => onSelectTab(tab.key)}
                  className={classNames(styles.tab, {
                  [styles.active]: tab.key === activeTab,
                  [styles.disabled]: tab.key !== activeTab,
                  })}
               >
               {tab.name}
            </div>
            );
         })}
      </div>
   );
};

export default TabsList;