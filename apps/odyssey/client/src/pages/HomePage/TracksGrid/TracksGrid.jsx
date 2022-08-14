import { useQuery } from "@apollo/client"
import Grid from '@mui/material/Grid';
import { TrackCard } from "../../../components/TrackCard/TrackCard";
import { GET_TRACKS } from "./tracks"

export const TracksGrid = () => {
    const { loading, error, data } = useQuery(GET_TRACKS);

    if (loading) return <>Loading...</>;

    if (error) return <>{error.message}</>;
  
    return (
        <Grid container>
            {data?.tracksForHome?.map(track => (
                <Grid key={track.id} item>
                    <TrackCard track={track} />
                </Grid>
            ))}
        </Grid>
    )
}