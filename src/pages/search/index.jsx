import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../../components/movie-card'
import './style.css'

const apiKey = import.meta.env.VITE_API_KEY
const apiMovieSearch = import.meta.env.VITE_API_MOVIE_SEARCH

const Search = () => {
    const [movies, setMovies] = useState([])
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        const searchedMoviesUrl = `${apiMovieSearch}?api_key=${apiKey}&query=${query}`

        getSearchedMovies(searchedMoviesUrl)
    }, [query])

    return (
        <div className='container'>
            <h2 className='title'>Resultados para <span className='query-text'>{query}</span></h2>
            <div className='movies-container'>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Search;