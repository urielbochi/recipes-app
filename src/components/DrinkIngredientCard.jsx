import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "./Card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  drinkFilterByIngredientListFetch,
  drinkHandleClickIngredient,
} from "../redux/actions/actionDrink";
import "./Card.css";


function DrinkIngredientCard({ title: { strIngredient1 }, index }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(drinkHandleClickIngredient(true));
    dispatch(drinkFilterByIngredientListFetch(strIngredient1));
  };

  const myCardStyle = {
    color: "black",
    fontFamily: "Juliana",
    fontWeight: "900",
    fontSize: "25px",
  };

  return (
    <Link to="/bebidas" onClick={handleClick}>
      <Card className="card__configuration-general">
        <Card.Img
          className="configuration-setted"
          src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Medium.png`}
        />
        <Card.Body>
          <Card.Title style={myCardStyle}>{strIngredient1}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

DrinkIngredientCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number,
}.isRequired;

export default DrinkIngredientCard;
