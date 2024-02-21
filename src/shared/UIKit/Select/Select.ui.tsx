import { FC, SelectHTMLAttributes } from "react";
import { classNames } from "shared/lib";
import styles from './Select.module.css';

export const Select:FC<SelectHTMLAttributes<HTMLSelectElement>> = ({className, children, ...props}) => {
    return (
        <select {...props} className={classNames(styles.select, className)}>{children}</select>
    );
}