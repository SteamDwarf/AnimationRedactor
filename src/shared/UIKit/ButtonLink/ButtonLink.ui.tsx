import { FC, MouseEventHandler } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styles from './ButtonLink.module.css';

interface IButtonLink extends NavLinkProps{
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export const ButtonLink:FC<IButtonLink> = ({to, children, onClick}) => {
    return(
        <NavLink className={styles.link} to={to} onClick={onClick}>
            {children}
        </NavLink>
    );
}