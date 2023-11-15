const API_URL = 'https://rickandmortyapi.com/api';
const URL_CHARACTERS = `${API_URL}/character`;
const episodeCharacter = {};

const getCharacters = async () => {
    try{
        const dataCharacters = await fetchFuction(URL_CHARACTERS);
        const characters = await Promise.all(dataCharacters.results.map(async character => {
            const episodesData = await Promise.all(character.episode.map(async episodeUrl => {
                return  getEpisodesCharacter(episodeUrl)
            }));
            return {
                id: character.id,
                image: character.image,
                name: character.name,
                episodes: episodesData
            };
        }));
        return characters;
    }
    catch (error){
        return error.message;
    }
};

const getEpisodesCharacter = async (url) => {
    if(!episodeCharacter[url]){
        const dataEpisodesCharacter = await fetchFuction(url);
        episodeCharacter[url] = { 
                id: dataEpisodesCharacter.id,
                name: dataEpisodesCharacter.name
        }
    }
    return episodeCharacter[url]; 
}

const fetchFuction = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error : ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data
    }catch(error){
        throw new Error(`Error: ${error.message}`);
    }
}

getCharacters().then(response => console.log(response));
