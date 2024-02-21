import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styles from './ButtonLink.module.css';

export const ButtonLink:FC<NavLinkProps> = ({to, children}) => {
    return(
        <NavLink className={styles.link} to={to}>
            {children}
        </NavLink>
    );
}