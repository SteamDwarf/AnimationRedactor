import { FC, MouseEventHandler, RefObject, forwardRef } from "react";
import { IComponent } from "../interfaces";

export interface TitleProps extends IComponent {
    onClick?: MouseEventHandler
}


export const Title:FC<TitleProps> = forwardRef(({children, className, onClick}, ref) => {
    return (
        <h1 ref={ref as RefObject<HTMLHeadingElement>} onClick={onClick} className={className}>
            {children}
        </h1>
    )
});