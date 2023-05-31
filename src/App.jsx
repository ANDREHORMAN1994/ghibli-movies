import { useContext, useState } from 'react';
import './App.css';
import { ContextLogin, ContextMovies } from './context/Context';

function App() {
  const { movies } = useContext(ContextMovies);
  const { email } = useContext(ContextLogin);
  
  const [ name, setName ] = useState('');
  const [ favoritos, setFavoritos ] = useState([]);

  const updateFav = (movie) => {
    setFavoritos([
      ...favoritos,
      movie,
    ])
  }

  return (
    <div className="App">
      <h1>Context API</h1>

      <input type="text" onChange={({ target }) => setName(target.value)} />

      {
        movies
        .filter((movie) => movie.title.includes(name) )
        .map((movie) => (
          <div key={movie.id} >
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} width="150" />
            <button type='button' onClick={ () => updateFav(movie) } >Fav</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
