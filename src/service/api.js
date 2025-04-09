const API_KEY = "e6439287ffbcc434c36876dd2342f25a"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()

    return data.results
}

export const searchMovies = async (query) => {
    console.log(`${BASE_URL}/search/movie?api_key=${API_KEY}& query=${encodeURIComponent(query)}`)
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()

    return data.results
}