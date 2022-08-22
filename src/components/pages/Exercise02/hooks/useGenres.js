import { useEffect, useState } from "react"

export const useGenres = () => {
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('Comedy');

    const getFilteredMovies = ( movies = [] ) => {
        return movies.filter( movie => movie.genres.includes(selectedGenre) )
    }

    const handleGenresFetch = () => {
        console.log('Getting genres');
        fetch('http://localhost:3001/genres')
          .then(res => res.json())
          .then(json => {
            setGenres(json)
          })
          .catch(() => {
            console.log('Run yarn movie-api for fake api')
          })
      }
    
      useEffect(() => {
        handleGenresFetch()
      }, [])

      return {
        genres,
        selectedGenre,
        setSelectedGenre,
        getFilteredMovies
      }
}
