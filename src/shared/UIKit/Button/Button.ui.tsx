import { FC, RefObject, forwardRef } from "react"
import styles from './Button.module.css';
import { classNames } from "shared/lib";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  }


export const Button:FC<ButtonProps> = forwardRef(({children, className, onClick}, ref) => {
    return (
        <button 
            ref={ref as RefObject<HTMLButtonElement>} 
            onClick={onClick} 
            className={classNames(styles.button, className)}
        >
            {children}
        </button>
    )
});