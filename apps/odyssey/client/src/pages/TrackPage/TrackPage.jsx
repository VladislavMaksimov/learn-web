import { useQuery, useMutation } from "@apollo/client"
import { useParams } from "react-router-dom"
import { INCREMENT_TRACK_VIEWS } from "./trackMutations";
import { GET_TRACK } from "./trackQueries"

export const TrackPage = () => {
    const params = useParams();
    const { trackId } = params;

    const { data, loading, error } = useQuery(GET_TRACK, {
        variables: { trackId: trackId },
        onCompleted: (data) => {
            console.log(data);
        }
    });

    const [ incrementTrackViews ] = useMutation(INCREMENT_TRACK_VIEWS, {
        variables: { incrementTrackViewsId: trackId }
    })

    return (
        <div style={{width: 300, height: 200, background: 'yellow'}} onClick={incrementTrackViews}>
            <p> title: { data?.track.title } </p>
            <p> views: { data?.track.numberOfViews } </p>
        </div>
    );
}