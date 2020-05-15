/**
 * Example courtesy of
 * https://medium.com/@thanhbinh.tran93/react-state-management-fb857a2432cf
 */

import React from 'react';
import { Movies } from './Movies';
import { MoviesProvider } from './MoviesContext';
import { NewMovie } from './NewMovie';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <MoviesProvider>
        <NewMovie />
        <Movies />
      </MoviesProvider>
    </div>
  );
};

export default App;
