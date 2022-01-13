import React from "react";

const Pokemon = (props) =>{
    const {pokemon} = props;
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
            <div className="Pokemon-card-favorite">&#x2764;</div>
            </div>
        </div>
    </div>
);
}

export default Pokemon;