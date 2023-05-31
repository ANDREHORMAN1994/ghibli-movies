import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProviderLogin from './context/ProviderLogin';
import ProviderMovies from './context/ProviderMovies';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProviderLogin>
    <ProviderMovies>
      <App />
    </ProviderMovies>
  </ProviderLogin>
);
