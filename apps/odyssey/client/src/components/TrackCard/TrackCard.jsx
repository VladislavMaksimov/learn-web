import Card from '@mui/material/Card';
import { TrackCardFooter } from './TrackCardFooter/TrackCardFooter';
import styles from './TrackCard.module.scss';

export const TrackCard = ({ track }) => {
    const { title, thumbnail} = track;
    return <Card className={styles.card}>
        <img className={styles.thumbnail} alt={title} src={thumbnail} />
        <h3>{title}</h3>
        <TrackCardFooter track={track} />
    </Card>
};