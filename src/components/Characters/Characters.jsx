import axios from 'axios';
import { useState, useEffect } from 'react';
import "./_characters.scss";
const baseUrl = "https://gateway.marvel.com";
const apiKey = "066323a8610c58289ee23caf482aafe8";
const allCharacters = "/v1/public/characters"
const ts = "170763934";
const hash = "683f63d6502f6476a623bf5ac7e80302"
const imgSize = "portrait_xlarge";

function Characters() {
    const [characters, setCharacters] = useState(null);
    const [error, setError] = useState(null);
    function getCharacters() {
        let url = baseUrl + allCharacters;
        let Params = {
            apikey: apiKey,
            ts: ts,
            hash: hash,
        };
        axios.get(url, {
            params: Params,
        })
            .then(response => { 
                setCharacters(response.data.data.results);
                console.log(response);
        })
            .catch(error => {
                setError(error.message);
        })
    }
    useEffect(() => { getCharacters(); }, []);
    if (error) {
        return (
            <h2>{ error }</h2>
        )
    } else if (characters) {
        let items = characters.map((character, index) =>
            <div key={index} className='character'>
                <h2>{character.name}</h2>
                <img src={character.thumbnail.path + "/" + imgSize + "." + character.thumbnail.extension} alt={characters.name} />
                <p>{character.description}</p>
                {/* <p>{character.comics.items.name }</p> */}
            </div>,
        )
        return (
            <div className='characters'>{items}</div>
        )
    }
    return (
        <h1>jii</h1>
    )
};
export default Characters;