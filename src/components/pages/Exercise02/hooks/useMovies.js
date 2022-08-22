import { useEffect, useState } from 'react'

export const useMovies = () => {
    const [movies, setMovies] = useState([])
    const [fetchCount, setFetchCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [isDescending, setIsDescending] = useState(true);

    const toggleDescending = () => {
        setIsDescending(!isDescending)
    };

    const getSortedMovies = () => {
        return movies.sort( ( a, b ) => {
            if (isDescending) {
                return parseInt(b.year) - parseInt(a.year)
            }

            return parseInt(a.year) - parseInt(b.year)
        } )
    }

    const handleMovieFetch = () => {
        setLoading(true)
        setFetchCount(fetchCount + 1)
        console.log('Getting movies')
        fetch('http://localhost:3001/movies')
          .then(res => res.json())
          .then(json => {
            setMovies(json)
            setLoading(false)
          })
          .catch(() => {
            console.log('Run yarn movie-api for fake api')
          })
      }
    
    useEffect(() => {
        handleMovieFetch()
    }, [])

    return {
        movies: getSortedMovies(),
        loading,
        fetchCount,
        isDescending,
        toggleDescending
    }
}
