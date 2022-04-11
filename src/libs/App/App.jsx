import axios from 'axios';
import { useState } from 'react';
import Preview from '../Preview/Preview';
import SearchInput from '../SearchInput/SearchInput';
import  classes from './App.module.css';

export default function App() {
  const 
    [isLoading,setIsLoading] = useState(false),
    [error,setError] = useState(),
    [pokemon,setPokemon] = useState();

  async function handleFetch(value){

    setIsLoading(true);
    setError();
    setPokemon();
    if(value){
      try{
        const {data} = await axios.get(
            'https://pokeapi.co/api/v2/pokemon/' + value);
        setPokemon(data);
      }catch(e){
        if(e.response.status === 404){
          setError('Aucun Pokémon trouvé');
        } else{
          setError(e.response.message);
        }
      }
    }
    setIsLoading(false);
  }

  return (
    <div className={classes.container}>
      <div className={classes.pokedex}>
        <div className={classes.preview}>
          {error ? 
            <div className={classes.error}>{error}</div> :
            <Preview isLoading={isLoading} pokemon={pokemon}/> 
          }
        </div>
        <SearchInput onSearch={handleFetch}/>
      </div>
    </div>
  );
}