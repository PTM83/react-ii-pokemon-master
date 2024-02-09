export const getApi = async (url) => {

     try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
     } catch(error) {
        console.log(error)
        return [];
     }
}

// This function could be in a separate file if you prefer
export const fetchPokemonDetails = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const details = await response.json();
    return details;
  } catch (error) {
    console.error("Failed to fetch pokemon details:", error);
    return null;
  }
};