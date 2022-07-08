import { useState, useEffect } from 'react'
import MovieCard from '../../components/movie-card'
import './style.css'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

const Home = () => {
    const [movies, setMovies] = useState([])

    const getTopMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        const topMoviesUrl = `${apiUrl}top_rated?api_key=${apiKey}`

        getTopMovies(topMoviesUrl)
    }, [])

    return (
        <div className='container'>
            <h2 className='title'>Melhores Filmes</h2>
            <div className='movies-container'>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home;