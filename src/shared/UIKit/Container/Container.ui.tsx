import { FC, PropsWithChildren } from 'react'
import styles from './Container.module.css';
import { classNames } from 'shared/lib';

interface IContainer extends PropsWithChildren {
    className?: string
}

export const Container:FC<IContainer> = ({children, className}) => {
    return (
        <div className={classNames(styles.container, className)}>{children}</div>
    )
}
