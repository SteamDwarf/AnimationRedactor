import { Container } from "shared/UIKit/Container"
import { AnimationSettings } from "widgets/AnimationSettings"
import { Demo } from "widgets/Demo"
import styles from './AnimationRedactor.module.css';

export const AnimationRedactorPage = () => {
    return (
        <div className={styles.page}>
            <Container className={styles.container}>
                <Demo className={styles.demo}/>
                <AnimationSettings />
            </Container>
        </div>
    )
}