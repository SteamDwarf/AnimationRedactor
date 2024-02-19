import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from 'assets/Logo.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <NavLink to='/' className={styles.logo}><img src={logo}/></NavLink>
                <button>Preview</button>
            </nav>
        </header>
    );
}