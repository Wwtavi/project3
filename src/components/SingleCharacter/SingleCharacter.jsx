import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./_singleCharacter.scss";
const baseUrl = "https://gateway.marvel.com";
const apiKey = "066323a8610c58289ee23caf482aafe8";
const singleCharacter = "/v1/public/characters/";
const ts = "170763934";
const hash = "683f63d6502f6476a623bf5ac7e80302"
const imgSizebig = "landscape_incredible.";

function SingleCharacter() {
    const CharacterId = useParams().id;
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);
    function getCharacter() {
        let url = baseUrl + singleCharacter + CharacterId;
        let Params = {
            apikey: apiKey,
            ts: ts,
            hash: hash,
        };
        axios.get(url, {
            params: Params,
        })
            .then(response => { 
                setCharacter(response.data.data.results);
                console.log(response);
        })
            .catch(error => {
                setError(error.message);
        })
    }
    useEffect(() => { getCharacter(); }, []);
    if (error) {
        return (
            <h2>{error}</h2>
        )
    } else if (character) {
        return (
            <div className='singleCharacter'>
                <img src={character[0].thumbnail.path + "/" + imgSizebig + character[0].thumbnail.extension} alt={character[0].name} />
                <h3>{character[0].name}</h3>
                <p>{character[0].description}</p>
            </div>
        )
    }
    return (
        <h2>Loadind please wait</h2>
    )
};
export default SingleCharacter;