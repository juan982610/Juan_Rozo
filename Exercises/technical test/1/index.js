const API_URL = 'https://rickandmortyapi.com/api';
const URL_CHARACTERS = `${API_URL}/character`;
const episodeCharacter = {};

const getCharacters = async () => {
    try{
        const response = await fetch(URL_CHARACTERS);
        const data = await response.json();
        const characters = await Promise.all(data.results.map(async character => {
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
        const response = await fetch(url);
        const data = await response.json();
        episodeCharacter[url] = { 
                id: data.id,
                name: data.name
        }
    }
    return episodeCharacter[url]; 
}

getCharacters().then(response => console.log(response));
