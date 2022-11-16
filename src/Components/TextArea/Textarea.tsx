import React, { FC, ChangeEvent } from "react";

import styles from "./Input.module.css";

type TextAreaProps = {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   disabled?: boolean;
   rows: number;
   cols: number;
   autofocus?: boolean;
};

const Textarea: FC<TextAreaProps> = ({
   value,
   onChange,
   placeholder,
   disabled,
   rows,
   cols,
}) => {
   const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(event.target.value);
   };
   return (
      <textarea
            value={value}
            onChange={onChangeTextarea}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            cols={cols}
      />
   );
};

export default Textarea;
