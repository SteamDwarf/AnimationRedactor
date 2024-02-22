import { CSSProperties, MouseEventHandler, PropsWithChildren, RefObject } from "react";

export interface IComponent extends PropsWithChildren {
    id?: string
    className?: string
    onClick?: MouseEventHandler,
    styles?: CSSProperties,
    //ref?: RefObject<unknown>
}