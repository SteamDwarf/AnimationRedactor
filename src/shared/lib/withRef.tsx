import { ComponentType, forwardRef } from "react";
import { IComponent } from "shared/UIKit/interfaces";

/* export const withRef = <T extends IComponent>(Child:ComponentType<T>) => {
    return forwardRef((props: T, ref) => {
        return <Child {...props} ref={ref}/>
    })
} */
/* 
export const Button:FC<ButtonProps> = forwardRef(({children, className, onClick}, ref) => {
    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <button ref={ref as any} onClick={onClick} className={classNames(styles.button, className)}>
            {children}
        </button>
    )
}); */

export const withRef = <T extends IComponent>(Child:ComponentType<T>) => (props:T) => {
    return forwardRef(() => <Child {...props} />)
}
