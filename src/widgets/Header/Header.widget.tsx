import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from 'assets/Logo.svg';
import { ButtonLink } from 'shared/UIKit/ButtonLink';
import { Container } from 'shared/UIKit/Container';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.navigation}>
                    <NavLink to='/' className={styles.logo}><img src={logo}/></NavLink>
                    <ButtonLink to='/preview'>Preview</ButtonLink>
                </nav>
            </Container>
        </header>
    );
}