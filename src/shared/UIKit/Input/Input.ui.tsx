import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import styles from './Input.module.css';
import { classNames } from "shared/lib";

export const Input:FC<InputHTMLAttributes<HTMLInputElement>> = ({className, ...props}) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <input {...props} onChange={onChange} className={classNames(styles.input, className)} />
    );
}