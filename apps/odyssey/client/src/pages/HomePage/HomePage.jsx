import { TracksGrid } from "./TracksGrid/TracksGrid";
import styles from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <div className={styles.layout}>
            <TracksGrid/>
        </div>
    );
};