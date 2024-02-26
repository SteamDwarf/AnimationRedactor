import { FC, HTMLAttributes, MouseEventHandler, RefObject, forwardRef } from "react"
import styles from './Text.module.css';
import { classNames } from "shared/lib";

interface IText extends HTMLAttributes<HTMLParagraphElement> {
    onClick?: MouseEventHandler
}

export const Text:FC<IText> = forwardRef(({children, className, ...props}, ref) => {
    return (
        <p {...props} 
            className={classNames(className, styles.text)} 
            ref={ref as RefObject<HTMLParagraphElement>}
        >
            {children}
        </p>
    )
})