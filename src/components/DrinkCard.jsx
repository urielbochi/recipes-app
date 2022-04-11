import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "./Card.css";

function DrinkCard({ drink: { strDrink, strDrinkThumb }, index }) {
  const myCardStyle = {
    color: 'black',
    fontFamily: 'Juliana',
    fontWeight: '900',
    fontSize: '25px',
  }
  return (
    <Card className='card__configuration-general'>
      <Card.Img
        className="configuration-setted"
        data-testid={`${index}-card-img`}
        src={strDrinkThumb}
        alt="foodandDrinkImages"
      />
      <Card.Body>
        <Card.Title style={myCardStyle}>{strDrink}</Card.Title>
      </Card.Body>
    </Card>
  );
}

DrinkCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number,
}.isRequired;

export default DrinkCard;
