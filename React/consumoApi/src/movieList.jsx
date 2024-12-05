import MovieItem from './movieItem';

function MovieList({movies}){
    if(movies.length === 0){
        return <p style={{color: 'red'}}>No se encontró peliculas</p>;
    }

    return (
        <ul style={{listStyle: 'none', padding: 0}}>
            {movies.map((movie) => (
                <MovieItem key={movie.imdbID} movie={movie}/>
            ))}
        </ul>
    );
};

export default MovieList;