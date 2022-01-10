import React from "react";
import {searchPokemon} from '../PokeApi';
const {useState} = React;

 

const SearchBar = ()=>{

    const [searchPoke ,setsearchPoke] = useState('');
    const [pokemon , setpokemon] = useState();

    const onChange = (e)=>{
        // console.log(e)
        // console.log(e.target.value);
        setsearchPoke( e.target.value);
    };

    const onClick = async (e)=>{
        const data = await searchPokemon(searchPoke)
        setpokemon(data);
        console.log(data)
    };          
    return(
        <div className ="searchBar-container">
            <div className="searchBar">
                <input type="search" placeholder="Buscar Pokemon..." onChange={onChange}  />
            </div>
            <div className = "searchBar-btn">
               <button onClick={onClick}>Buscar Pokemon</button>
            </div>
        </div>
    );
};

export default SearchBar;