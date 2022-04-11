import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './Card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  foodFilterByIngredientListFetch,
  foodHandleClickIngredient,
} from '../redux/actions/actionFood';

function FoodIngredientCard({ title: { strIngredient }, index }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(foodHandleClickIngredient(true));
    dispatch(foodFilterByIngredientListFetch(strIngredient));
  };

  const myCardStyle = {
    color: "black",
    fontFamily: "Juliana",
    fontWeight: "900",
    fontSize: "25px",
  };

  return (
    <Link to="/comidas" onClick={ handleClick }>
    <Card className="card__configuration-general">
      <Card.Img
        className="configuration-setted"
        src={`https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`}
      />
      <Card.Body>
        <Card.Title style={myCardStyle}>{strIngredient}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
    )
    }
    


FoodIngredientCard.propTypes = ({
  item: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number,
}).isRequired;

export default FoodIngredientCard;
