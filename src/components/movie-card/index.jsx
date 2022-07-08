import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import './style.css'

const movieImageUrl = import.meta.env.VITE_API_MOVIE_IMAGE

const MovieCard = ({ movie, showLink }) => {
    return (
        <div className='movie-card'>
            <img src={movieImageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

MovieCard.defaultProps = {
    showLink: true
}

export default MovieCard