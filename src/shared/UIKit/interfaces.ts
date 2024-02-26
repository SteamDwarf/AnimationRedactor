import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";

export interface IComponent extends PropsWithChildren {
    id?: string
    className?: string
    onClick?: MouseEventHandler,
    styles?: CSSProperties,
}