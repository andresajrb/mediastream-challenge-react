import React from 'react'

export const MoviesPanel = ({ movies, loading, fetchCount }) => {
    if (loading) {
        return (
            <div className="movie-library__loading">
                <p>Loading...</p>
                <p>Fetched {fetchCount} times</p>
            </div>
        )
    }

    return (
        <ul className="movie-library__list">
            {movies.map(movie => (
                <li key={movie.id} className="movie-library__card">
                    <img src={movie.posterUrl} alt={movie.title} />
                    <ul>
                        <li className='movie-library__card-title'>{movie.title}</li>
                        <li>{movie.genres.join(', ')}</li>
                        <li>{movie.year}</li>
                    </ul>
                </li>
            ))}
        </ul>
    )
}
