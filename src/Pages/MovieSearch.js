import React, { useEffect, useState } from 'react'
import { Button, Container, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavigationBar from '../components/Navbar'
import { getMovieList, searchMovie } from '../api'

const MovieSearch = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setPopularMovies(query.results);
            console.log({ query: query });
        }
    }

    console.log({ popularMovies: popularMovies });

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
            return (
                <div className='movie-search-wrapper' key={i}>
                    <div className='movie-search-title'>{movie.title}</div>
                    <img className='movie-search-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
                </div>
            )
        })
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <div className='movie-search-container'>
                    <div className='movie-search-content'>
                        <div className='search-text'>
                            <h2 className='text-center text-white'>Search movie...</h2>
                        </div>
                        <div className='text-center mb-3'>
                            <input
                                type='text'
                                placeholder='Search movies here...'
                                style={{ width: "300px" }}
                                onChange={({ target }) => search(target.value)}
                            />
                        </div>
                    </div>

                    <div className='movie-search-result'>
                        <PopularMovieList />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default MovieSearch