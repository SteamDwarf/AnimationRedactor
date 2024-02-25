import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from 'assets/Logo.svg';
import { ButtonLink } from 'shared/UIKit/ButtonLink';
import { Container } from 'shared/UIKit/Container';
import { useContext } from 'react';
import { AnimationContext } from 'app/context';
import { Button } from 'shared/UIKit/Button';
import playSvg from 'assets/Play.svg';

export const Header = () => {
    const {onPreview, resetChosedElement, playAnimation} = useContext(AnimationContext);

    
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.navigation}>
                    <NavLink onClick={resetChosedElement} to='/' className={styles.logo}>
                        <img src={logo}/>
                    </NavLink>
                    <div className={styles.leftSection}>
                        {
                            onPreview && 
                                <Button  className={styles.buttonImage}  onClick={playAnimation}>
                                    <img src={playSvg} alt="play" />
                                </Button>
                        }
                        <ButtonLink onClick={resetChosedElement} to='/preview'>Preview</ButtonLink>
                    </div>
                </nav>
            </Container>
        </header>
    );
}