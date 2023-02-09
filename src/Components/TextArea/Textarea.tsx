import React, { FC, ChangeEvent } from "react";

import styles from "./TextArea.module.css";
import classNames from "classnames";

type TextAreaProps = {
   title?: string;
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   disabled?: boolean;
   rows: number;
   cols: number;
   autofocus?: boolean;
   className?: string;
};

const Textarea: FC<TextAreaProps> = ({
   value,
   onChange,
   placeholder,
   disabled,
   rows,
   cols,
   title,
   className
}) => {
   const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.target.value);
   };
   return (
      <div>
         {title && <div className={styles.title}>{title}</div>}
      <textarea
            title={title}
            value={value}
            onChange={onChangeTextarea}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            cols={cols}
            className={classNames(className, styles.textarea)}
      />
      </div>
   );
};

export default Textarea;
