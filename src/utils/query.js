
const base_url = 'https://pokeapi.co/api/v2';

export const getPokemons = async (numberOfPokemon) => {

    const response = await fetch(`${base_url}/pokemon?limit=${numberOfPokemon}`);
    const data = await response.json();
    const promises = await data.results.map(async pokemon => {
        const result = await fetch(pokemon.url);
        const res = await result.json();
        return res;
    });
    const results = await Promise.all(promises);
    return results;
}
