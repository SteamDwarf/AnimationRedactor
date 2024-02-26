import { FC, MouseEventHandler, RefObject, forwardRef } from "react";
import { IComponent } from "../interfaces";
import { classNames } from "shared/lib";
import styles from './Title.module.css';
export interface TitleProps extends IComponent {
    onClick?: MouseEventHandler
}


export const Title:FC<TitleProps> = forwardRef(({children, className, onClick}, ref) => {
    return (
        <h1 ref={ref as RefObject<HTMLHeadingElement>}
            onClick={onClick} 
            className={classNames(className, styles.title)}
        >
            {children}
        </h1>
    )
});