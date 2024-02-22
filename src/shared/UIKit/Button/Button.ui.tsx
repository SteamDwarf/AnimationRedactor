import { ButtonHTMLAttributes, FC, forwardRef } from "react"
import styles from './Button.module.css';
import { IComponent } from "../interfaces";
import { classNames } from "shared/lib";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // customProps
  }


export const Button:FC<ButtonProps> = forwardRef(({children, className, onClick}, ref) => {
    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <button ref={ref as any} onClick={onClick} className={classNames(styles.button, className)}>
            {children}
        </button>
    )
});