import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialMovies } from './initialState';

// create the context
// automatically comes with Provider and Consumer components
const MoviesContext = React.createContext();
const ADD_MOVIE = 'ADD_MOVIE';
const MARK_WATCHED_MOVIE = 'MARK_WATCHED_MOVIE';

// this recognizes the action and adjusts the state
// as required.
const moviesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
        // action.payload = the new movie object to add to state
      const movies = [action.payload, ...state.movies];
      return {
        ...state,
        movies,
      };
    }
    case MARK_WATCHED_MOVIE: {
        // this assumes user clicks watched on multiple
        // movies at one time.
      const movies = state.movies.map(movie => {
        if (movie.id === action.payload.id) {
          return { ...movie, watched: !movie.watched };
        }

        return movie;
      });

      return {
        ...state,
        movies,
      };
    }

    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

// instantiate the movie collection from initialState.js

const initialState = {
  movies: initialMovies,
};

// the customized Provider 
export const MoviesProvider = props => {
  const [state, dispatch] = React.useReducer(moviesReducer, initialState);

  // need to understand more about what useMemo is doing here.
  // I'd expect it to not re-render components unless
  // the initial state is somehow modified.
  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <MoviesContext.Provider value={value} {...props} />;
};

export const useMoviesContext = () => {
  const context = React.useContext(MoviesContext);

  if (!context) {
    throw new Error('useMoviesContext must be used inside a MoviesProvider');
  }

  const { state, dispatch } = context;
  const { movies } = state;

  // these are the methods used to update state by the various
  // components
  const addMovie = movie => {
    movie.id = uuidv4();
    movie.watched = false;
    dispatch({ type: ADD_MOVIE, payload: movie });
  };

  const markWatchedMovie = id => {
    dispatch({ type: MARK_WATCHED_MOVIE, payload: { id } });
  };

  // returns the state and the context methods that can be used 
  // to update state.
  return { movies, addMovie, markWatchedMovie };
};
