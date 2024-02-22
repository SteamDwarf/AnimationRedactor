import { FC, InputHTMLAttributes } from "react";
import styles from './Input.module.css';
import { classNames } from "shared/lib";

export const Input:FC<InputHTMLAttributes<HTMLInputElement>> = ({className, onChange, ...props}) => {
    return (
        <input {...props} onChange={onChange} className={classNames(styles.input, className)} />
    );
}