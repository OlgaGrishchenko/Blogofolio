import React, {FC} from "react";

import styles from "./Title.module.css"

type TitleProps = {
   title: string;
   className: string;
};

const Title: FC<TitleProps> = ({title}) => {
   return <h1 className={styles.title} >
   {title}
    </h1>
};

export default Title;