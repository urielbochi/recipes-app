import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './Card.css';

function FoodCard({ food: { strMeal, strMealThumb }, index }) {
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
        src={ strMealThumb }
        alt="foodandDrinkImages"
      />
      <Card.Body>
        <Card.Title style={myCardStyle}>{ strMeal }</Card.Title>
      </Card.Body>
    </Card>
  );

}

FoodCard.propTypes = ({
  item: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number,
}).isRequired;

export default FoodCard;
