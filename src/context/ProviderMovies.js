import { useEffect, useState } from "react";
import { ContextMovies } from "./Context";

function ProviderMovies({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const requestAPi = async () => {
      const endpoint = 'https://api-trybe-frontend.vercel.app/api/ghibli-animations';
      const response = await fetch(endpoint);
      const data = await response.json();
      setMovies(data);
    }
    
    requestAPi();
  }, []); // Did Mount

  const valueContext = {
    movies,
    setMovies
  }

  return (
    <ContextMovies.Provider value={ valueContext } >
      { children }
    </ContextMovies.Provider>
  )
}

export default ProviderMovies;
