import "../css/Favorites.css"
import {useMovieContext} from "../contexts/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {

    const {favorites} = useMovieContext()

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your favorites</h2>
                <div className="movies-grid">
                    {favorites.map(movie =>
                        <MovieCard movie={movie} key={movie.id}/>
                    )}
                </div>
            </div>
        )
    }

    return <div className='favorites-empty'>
        <h2>No favorite movies yet</h2>
        <p> start adding movies to your favorites</p>
    </div>


}

export default Favorites