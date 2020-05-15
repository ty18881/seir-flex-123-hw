import React from 'react';
import { Movie } from './Movie';
import { useMoviesContext } from './MoviesContext';

export const Movies = () => {
    // this call returns the collection of movies and two methods
    // 1. mark the movie as watched
    // 2. add a new movie
  const { movies } = useMoviesContext();

  return (
    <section className="Movies">
      <h2>My Movies</h2>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
};