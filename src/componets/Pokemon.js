import React from "react";
import FavoriteContext from "../contexts/favoriteContex";
const {useContext} = React;

const Pokemon = (props) =>{
    const {pokemon} = props;

    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = "❤"
    const blackHeart = "🖤"
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (e)=>{
        e.preventDefault();
        updateFavoritePokemons(pokemon.name)
    }
return (
    <div className="Pokemon-card">
        <div className="Pokemon-img-container"><img src={pokemon.sprites.front_default} alt={pokemon.name}/></div>
        <div className="Pokemon-card-body">
            <div className="Pokemon-card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
            </div>
            <div className="Pokemon-card-bottom">
            <div className="Pokemon-card-type">
                {pokemon.types.map((type,idx)=>{
                    return <div className="Pokemon-card-type-text" key={idx}>{type.type.name}</div>; 
                })}
            </div>
            <button onClick={clickHeart}>
                <div className="Pokemon-card-favorite">{heart}</div>
            </button>
            </div>
        </div>
    </div>
);
}

export default Pokemon;