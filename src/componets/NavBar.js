import React from "react";

const NavBar = ()=>{

    let NavBarImgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav>
            <div />
            <div>
                <img src={NavBarImgUrl} alt alt="navbarlogo" className="navBarImg"/>
            </div>
            <div>
                👌
            </div>
        </nav>
    )
}

export default NavBar; 