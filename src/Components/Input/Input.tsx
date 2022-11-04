import React, { FC, ChangeEvent, forwardRef } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./Input.module.css";

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    title?: string;
    onDefaultClick?: () => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        value,
        onChange,
        placeholder,
        disabled,
        error,
        title,
        onDefaultClick,
    } = props;
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            {title && <div className={styles.title}>{title}</div>}
            <input
                className={classNames(styles.input, {
                    [styles.inputError]: error,
                })}
                value={value}
                onChange={onChangeInput}
                placeholder={placeholder}
                disabled={disabled}
                onClick={onDefaultClick}
                ref={ref}
            />
            {error && <div className={styles.textError}>{error}</div>}
        </div>
    );
});

export default Input;
