import { useFetchMovie } from "hooks/useFetchMovie";

export const MovieDetailsPage = () => {
    const movie = useFetchMovie();

    console.log( movie );
    return (
        <>
            { movie && <div>{ movie.title }</div>}
        </>
    )
}