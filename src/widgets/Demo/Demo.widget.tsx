import { FC } from "react";
import { classNames, withAnimation } from "shared/lib";
import styles from './Demo.module.css';
import image from 'assets/67acaaf5adf6b661768b042a4bcab8dc.png';
import { AnimatedButton } from "features/AnimatedButton";
import { Title } from "shared/UIKit/Title";
import { Text } from "shared/UIKit/Text";
import { Image } from "shared/UIKit/Image";

interface IDemo {
    className?: string
}

const AnimatedTitle = withAnimation(Title);
const AnimatedText = withAnimation(Text);
const AnimatedImage = withAnimation(Image);

export const Demo:FC<IDemo> = ({className}) => {

    return (
        <main className={classNames(styles.container, className)}>
            <section className={styles.leftSection}>
                <AnimatedTitle id="title" >Animation Settings</AnimatedTitle>
                <AnimatedText id="text">The user should have the option to select any element on the page and set up its animation using the controls in the right panel. A dotted line will show the element's position and state before the animation begins, giving the user a clear idea of how the animation will appear. The preview button on the top panel will open the result in a new tab.</AnimatedText>
                <AnimatedButton id="test=-btn">Button</AnimatedButton>
            </section>
            <section>
                <AnimatedImage id="image" className={styles.image} src={image} alt="Example Image" />
            </section>

        </main>
    );
}