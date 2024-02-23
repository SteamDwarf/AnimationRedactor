import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from 'assets/Logo.svg';
import { ButtonLink } from 'shared/UIKit/ButtonLink';
import { Container } from 'shared/UIKit/Container';
import { useContext } from 'react';
import { AnimationContext } from 'app/context';

export const Header = () => {
    const {setIsPlay, resetChosedElement} = useContext(AnimationContext);

    const toMain = () => {
        setIsPlay(false);
        resetChosedElement();
    }

    const toPreview = () => {
        setIsPlay(true);
        resetChosedElement();
    }
    
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.navigation}>
                    <NavLink onClick={toMain} to='/' className={styles.logo}>
                        <img src={logo}/>
                    </NavLink>
                    <ButtonLink onClick={toPreview} to='/preview'>Preview</ButtonLink>
                </nav>
            </Container>
        </header>
    );
}