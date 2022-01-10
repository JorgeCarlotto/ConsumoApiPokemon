export const searchPokemon = async (pokemon) =>{
    try{
        let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const responce =  await fetch(apiUrl)
        const data = await responce.json()  
        return data  
    }
    catch(e){
        
    }
}

