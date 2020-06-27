// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCards from "./CharacterCards";

function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="character-container">
      {characters.map((character) => {
        return (
          <CharacterCards
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            gender={character.gender}
          />
        );
      })}
    </div>
  );
}

export default Character;