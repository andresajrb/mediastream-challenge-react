import React from 'react'

export const GenreSelect = ({ genres = [], selectedGenre, setSelectedGenre }) => (
    <select value={selectedGenre} onChange={(e) => setSelectedGenre( e.target.value)}>
        {genres.map( genre => ( 
        <option value={genre} key={genre}>{genre}</option>
        ) )}
    </select>
)