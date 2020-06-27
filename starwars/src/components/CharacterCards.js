import React from "react";
import styled from "styled-components";
import "./CharacterCards.css";

const CharacterCards = (props) => {
  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 5px #fff;
    background: black;
    
  `;
  const TitleTwo = styled.h2`
    font-size: 1em;
    text-align: center;
    color: white;
    background: black;
    margin: 5px 50px 5px 50px;
  `;
  const Wrapper = styled.section`
    padding: 1px;
    background: aquamarine;
    margin-bottom: 1%;
  `;
  return (
    <div className="character-cards">
      <Title className="character-name">Character Name: {props.name}</Title>
      <img
        alt="Wubba Lubba Dub Dub!"
        className="character-image"
        src={props.image}
      />
      <Wrapper className="wrapper">
        <TitleTwo>Species: {props.species}</TitleTwo>
        <TitleTwo>Status: {props.status}</TitleTwo>
        <TitleTwo>Gender: {props.gender}</TitleTwo>
      </Wrapper>
    </div>
  );
};

export default CharacterCards;
