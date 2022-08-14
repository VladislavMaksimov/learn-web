import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_TRACK } from "./track"

export const TrackPage = () => {
    const params = useParams();
    const { data, loading, error } = useQuery(GET_TRACK, {
        variables: { trackId: params.trackId }
    });
    return <>{ data?.track.title }</>
}