export const searchPokemon = async (pokemon) =>{
    try{
        let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const responce =  await fetch(apiUrl)
        const data = await responce.json()  
        return data  
    }
    catch(e){
        
    }
};

export const getPokemon = async (limit =10, offset=0) =>{
    try{
        let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const responce =  await fetch(apiUrl)
        const data = await responce.json()  
        return data  
    }
    catch(e){
        
    }

};

export const getPokemonData = async (pokemon)=>{
    try{
        let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const responce =  await fetch(apiUrl)
        const data = await responce.json()  
        return data  
    }
    catch(e){
        
    }

};
