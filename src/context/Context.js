import { createContext } from 'react';

const INITIAL_STATE_MOVIES = {
  movies: [],
}

const INITIAL_STATE_LOGIN = {
  email: '',
}

export const ContextMovies = createContext(INITIAL_STATE_MOVIES);
export const ContextLogin = createContext(INITIAL_STATE_LOGIN);

