import Avatar from '@mui/material/Avatar';
import { humanReadableTimeFromSeconds } from '../../../utils/helpers';

export const TrackCardFooter = ({ track }) => {
    const { author, length, modulesCount } = track;
    return (
        <section>
            <Avatar src={author.photo} />
            <div>
                <h4>{author.name}</h4>
                <span>{modulesCount} modules - {humanReadableTimeFromSeconds(length)}</span>
            </div>
        </section> 
    );
}