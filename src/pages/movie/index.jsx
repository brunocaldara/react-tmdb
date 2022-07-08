import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import MovieCard from '../../components/movie-card'
import './style.css'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = import.meta.env.VITE_API_URL

const Movie = () => {
    const [movie, setMovie] = useState(null)
    const { id } = useParams()

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${apiUrl}${id}?api_key=${apiKey}`

        getMovie(movieUrl)
    }, [])

    const formatCurrency = (number) => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='movie-page'>
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Movie;