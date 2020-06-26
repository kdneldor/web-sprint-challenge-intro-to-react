import React from "react";
import {Badge} from "reactstrap";
import {Button} from "reactstrap";


const CharacterCards = (props) => {
    return(
        <div className="character-cards">
            <h2>
        <Badge color="secondary">Character Name: {props.name}</Badge>
      </h2>
      <img
        alt="Wubba Lubba Dub Dub!"
        className="character-image"
        src={props.image}
      />
      <p>
        <Button color="success">{props.species}</Button>
      </p>
        </div>
    )
}

export default CharacterCards;