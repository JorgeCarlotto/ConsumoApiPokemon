import React from 'react';
import './App.css';
import Navbar from './componets/NavBar';
import SearchBar from './componets/SearchBar';
import Pokedex from './componets/Pokedex';
import {getPokemon, getPokemonData} from './PokeApi';

const {useState, useEffect} = React;

function App() {

const [pokes,setpokes]= useState([]);
const [page, setPage] = useState([0]);
const [total, setTotal]= useState([0]);
const [loading, setLoading] = useState([true]);

const fechPokemons = async()=>{
  try{
    setLoading(true);
      const data = await getPokemon(25, 25* page);
      // console.log(data.results)
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.name)  
      })
      const results = await Promise.all(promises);
      setpokes(results);
      setLoading(false);
      setTotal(Math.ceil(data.count/25))
    } 
  catch(e){}
  
}

useEffect(()=>{
  fechPokemons();
},[page])

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Pokedex 
      pokemons={pokes}
      page ={page}
      setPage ={setPage}
      total={total}
       />
    <div className="App"></div>
    
    </div>

  );
}
export default App;
