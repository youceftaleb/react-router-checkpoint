import { useState, useEffect } from 'react';
import { SearchFilter } from '../components/Filter';
import { AddMovie } from '../components/movie-add';
import { MovieCard } from '../components/MovieCard'
import { movies } from '../data';

const HomePage=() => {
  const [movieList, setMovieList] = useState([]);
  const [filter, setFilter] = useState("");
  const handleSetFilter = (text) => {
    setFilter(text);
  }
  useEffect(() => {
    setMovieList(movies);
  }, []);
  useEffect(() => {
    if (filter === '') {
      setMovieList(movies);
    } else {
      setMovieList(movies.filter(movie => movie.title.toLowerCase().includes(filter.toLocaleLowerCase())));
    }
  }, [filter]);
  const handleAddMovie = ({title1,posterURL1,rating1,desc1}) => {
    const newMovie = {
      id: new Date().getTime(),
      title: title1,
      desc:desc1,
      posterURL:posterURL1,
      rating:rating1
    }
    setMovieList([...movieList, newMovie]);
  }
  return (
    <div className="container">
      <h1 className='text-center text-info'>Movie list</h1>
      <SearchFilter handleSetFilter={handleSetFilter} />
      <div className="row p-4">
        {movieList.map((movie) => {
          return (
            <div key={movie.id} className='col-md-3'>
              <MovieCard movie={movie} />
            </div>
          )
        })}
      </div>
      <AddMovie addmovie={handleAddMovie} />
    </div>
  )
}
export default HomePage;
