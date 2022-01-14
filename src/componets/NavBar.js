import React from "react";
import FavoriteContext from "../contexts/favoriteContex";
const {useContext} = React;

const NavBar = ()=>{

    const {favoritePokemons} = useContext(FavoriteContext);

    console.log(favoritePokemons)

    let NavBarImgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav>
            <div />
            <div>
                <img src={NavBarImgUrl} alt="navbarlogo" className="navBarImg"/>
            </div>
            <div>
                💛 {favoritePokemons.length}
            </div>
        </nav>
    )
}

export default NavBar; 