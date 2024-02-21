import { FC } from "react"
import styles from './Button.module.css';
import { IComponent } from "../interfaces";
import { classNames } from "shared/lib";

export const Button:FC<IComponent> = ({children, className}) => {
    return (
        <button className={classNames(styles.button, className)}>{children}</button>
    )
}