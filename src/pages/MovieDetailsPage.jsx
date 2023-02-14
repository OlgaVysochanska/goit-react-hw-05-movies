import { useFetchMovie } from "hooks/useFetchMovie";

export const MovieDetailsPage = () => {
    const movie = useFetchMovie();

    console.log( movie );
    return <p>Movie details</p>
}