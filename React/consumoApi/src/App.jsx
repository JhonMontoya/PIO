import { useState } from 'react';
import axios from 'axios';

import MovieList from './movieList';
import SearchBar from './search';
import './App.css'

function App(){
  const [movies, setMovies] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState('');

  //funcion para buscar la pelicula

  const fetchMovie = async (query)=>{
    //inciar el estado de carga
    setIsLoad(true);
    setError('');

    try{
      const {data} = await axios.get('http://www.omdbapi.com/',{
        params : {
          s :  query, 
          apikey : '421f5798',
        },
      });

      if(data.Response === 'True'){
        setMovies(data.Search);
      }
      else{
        setError(data.Error);
      }

    }catch(error){
      console.log(error);
      setError('Hubo un problema de conexion con la appi')
    }finally{
      setIsLoad(false);
    }
  };

  return (
    <div style={{maxWidth: '800px', margin: 'auto'}}>

      <h2 style={{textAlign: 'center'}}> Buscar Película</h2>
      <SearchBar
        onSearch = {fetchMovie}
      />

      {isLoad && <p>Charging...</p>}
      {error && <p style={{color: 'red'}}>Error ! {error}</p>}
      <MovieList
        movies={movies}
      />

    </div>
  );
}

export default App
