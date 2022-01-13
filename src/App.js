import React from 'react';
import './App.css';
import Navbar from './componets/NavBar';
import SearchBar from './componets/SearchBar';
import Pokedex from './componets/Pokedex';
import {getPokemon, getPokemonData} from './PokeApi';

const {useState, useEffect} = React;

function App() {

const [pokes,setpokes]= useState([])

const fechPokemons = async()=>{
  try{
      const data = await getPokemon();
      console.log(data.results)
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.name)  
      })
      const results = await Promise.all(promises);
      setpokes(results);

    } 
  catch(e){}
  
}

useEffect(()=>{
  fechPokemons();
},[])

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Pokedex pokemons={pokes}/>
      

    <div className="App"></div>
    
    </div>

  );
}
export default App;
