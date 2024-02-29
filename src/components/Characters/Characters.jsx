import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {ReactComponent as LoupeLogo} from '../../img/loupe.svg';
import "./_characters.scss";
const baseUrl = "https://gateway.marvel.com";
const apiKey = "066323a8610c58289ee23caf482aafe8";
const allCharacters = "/v1/public/characters"
const charactersSearch = ":443/v1/public/characters?nameStartsWith="
const ts = "170763934";
const hash = "683f63d6502f6476a623bf5ac7e80302"
const imgSize = "portrait_xlarge.";

function Characters() {
    const [characters, setCharacters] = useState(null);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    function searchCharacters(e) {
        e.preventDefault();
        getCharacters(search);
    }
    function getCharacters(search) {
        let CharacterName = search;
        let url = search ? baseUrl + charactersSearch + CharacterName: baseUrl + allCharacters;
        let Params;
        if (search) {
            Params = {
                apikey: apiKey,
                ts: ts,
                hash: hash,
                orderBy: "modified",
            };    
        } else {
                Params = {
                apikey: apiKey,
                ts: ts,
                hash: hash,
            };   
        }

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
            <h2>{error}</h2>
        )
    } else if (characters) {
        let items = characters.map((character, index) =>
            <Link to={"/Characters/" + character.id} key={index} className='character'>
                <img src={character.thumbnail.path + "/" + imgSize + character.thumbnail.extension} alt={character.name} />
                <h3>{character.name}</h3>
                <p>{character.description}</p>
            </Link>,
        );
        return (
            <div className='conteiner'>
                <div>
                    <form onSubmit={searchCharacters} className='search'>
                        <div className="formIt">
                            <input type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type='submit'><LoupeLogo /></button>
                        </div>
                    </form>
                </div>
                <div className='characters'>{items}</div>
            </div>
        )
    }
        return (
            <h2>Loadind please wait...</h2>
        )
    
};
export default Characters;