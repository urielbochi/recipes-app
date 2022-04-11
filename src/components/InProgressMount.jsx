import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ShareButton from "./ShareButton";
import FavoriteButton from "./FavoriteButton";
import StartContinueDoneButton from "./StartContinueDoneButton";
import IngredientCheckList from "./IngredientCheckList";
import forno from "../images/forno.png";
import "./InProgressMount.css";
import Header from "./Header";

export default function InProgressMount(props) {
  const { data } = props;
  const [handleState, setState] = useState(false);
  const { id, type } = useParams();

  return (
    <div className="body-details">
      <Header />
      <div className="fakediv__padding-fix"></div>
      <div className="detailsTitleContainer">
        <div className="titleColumnTest">
          <h1 className="titleRecipesConfig" data-testid="recipe-title">
            {data.tittle}
          </h1>
        </div>
      </div>
      <img
        className="imgtittle"
        data-testid="recipe-photo"
        src={data.img}
        alt="detalhes"
      />
      <h4 className="subTitleRecipesConfig" data-testid="recipe-category">
        {data.category}
      </h4>
      <div className="img-center__progress">
        <img className="img-time-to-cook" src={forno} />
      </div>
      <h1 className="title__time-to-cook">"Avoir du pain sur la planche"</h1>
      <div className="ingredients">
        <div className="ingredients__column-progress">
          <h2 className="title-details mrg-top">Ingredients</h2>
          <p className="checkbox__text">
            Mark the checkbox when you have the respective ingredient
          </p>
          <lo onChange={() => setState(!handleState)}>
            <IngredientCheckList array={data} />
          </lo>
        </div>
        <div className="ingredients__column-progress">
          <h2 className="title-details mrg-top2">How to prepar</h2>
          <p className="instructions" data-testid="instructions">
            {data.Instructions}
          </p>
          <Link to="/receitas-feitas">
            <StartContinueDoneButton id={id} type={type} ingredients={data} />
          </Link>
        </div>
      </div>
    </div>
  );
}

const { string, shape } = PropTypes;
InProgressMount.propTypes = {
  data: shape({
    tittle: string.isRequired,
    img: string.isRequired,
    type: string,
    category: string.isRequired,
    Instructions: string.isRequired,
    tag: string.isRequired,
    ingredients: string.isRequired,
    measures: string.isRequired,
  }).isRequired,
};
