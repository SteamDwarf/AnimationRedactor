import { FC } from "react";
import { classNames } from "shared/lib";
import styles from './Demo.module.css';
import { Button } from "shared/UIKit/Button";
import image from 'assets/67acaaf5adf6b661768b042a4bcab8dc.png';

interface IDemo {
    className?: string
}

export const Demo:FC<IDemo> = ({className}) => {
    return (
        <main className={classNames(styles.container, className)}>
            <section className={styles.leftSection}>
                <h1 className={styles.title}>Animation Settings</h1>
                <p className={styles.text}>The user should have the option to select any element on the page and set up its animation using the controls in the right panel. A dotted line will show the element's position and state before the animation begins, giving the user a clear idea of how the animation will appear. The preview button on the top panel will open the result in a new tab.</p>
                <Button>Button</Button>
            </section>
            <section>
                <img className={styles.image} src={image} alt="Example Image" />
            </section>

        </main>
    );
}