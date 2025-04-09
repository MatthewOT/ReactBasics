import {createContext, useState, useEffect, useContext} from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        try {
            if (storedFavs && storedFavs !== "undefined") {
                setFavorites(JSON.parse(storedFavs));
            }
        } catch (error) {
            console.error("Erreur de parsing des favoris :", error);
            // On nettoie le localStorage si les données sont corrompues
            localStorage.removeItem("favorites");
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorites = (movieId) => {
        return Array.isArray(favorites) && favorites.some((movie) => movie.id === movieId);
    };


    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}