import { Container } from 'shared/UIKit/Container';
import styles from './Preview.module.css';
import { Demo } from 'widgets/Demo';

export const PreviewPage = () => {
    return (
        <div className={styles.page}>
            <Container className={styles.container}>
                <Demo className={styles.demo}/>
            </Container>
        </div>
    );
}