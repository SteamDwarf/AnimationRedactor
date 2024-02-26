import { FC, ImgHTMLAttributes, MouseEventHandler, RefObject, forwardRef } from "react"
import { classNames } from "shared/lib"
import styles from './Image.module.css';

interface IImage extends ImgHTMLAttributes<HTMLImageElement> {
    onClick?: MouseEventHandler
}

export const Image:FC<IImage> = forwardRef(({onClick, className, ...props}, ref) => {
    return (
        <img {...props} 
            onClick={onClick} 
            className={classNames(className, styles.image)}
            ref={ref as RefObject<HTMLImageElement>}
        />
    )
})