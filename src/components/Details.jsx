import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ShareButton from "./ShareButton";
import FavoriteButton from "./FavoriteButton";
import StartContinueDoneButton from "./StartContinueDoneButton";
import IngredientList from "./IngredientList";
import RecomendList from "./RecomendList";
import InProgressMount from "./InProgressMount";
import makeOwn from "../images/drinkMake.png";
import "./Details.css";
import need from "../images/need.png";
import prepar from "../images/prepar.png";

import Header from "./Header";

function Details(props) {
  const { Receita, DetailedRecipe, RecomendedRecipe, Id, InProgress } = props;
  if (InProgress) {
    return <InProgressMount data={DetailedRecipe} />;
  }

  return (
    <div>
      <div className="deixemeempaz">
        <Header />
      </div>
      <div className="details__image-title">
        <h1 className="titleRecipesConfig" data-testid="recipe-title">
          {DetailedRecipe.tittle}
        </h1>
        <img
          className="imgtittle"
          data-testid="recipe-photo"
          src={DetailedRecipe.img}
          alt="detalhes"
        />
        <div>
          <div className="details__column-title">
            <h4 className="subTitleRecipesConfig" data-testid="recipe-category">
              {DetailedRecipe.category}
            </h4>
            {DetailedRecipe && Receita === "bebidas" ? (
              <h3 className="subTitleRecipesConfig">{DetailedRecipe.type}</h3>
            ) : null}
            <Link to={`/${Receita}/${Id}/in-progress`}>
          <StartContinueDoneButton
            id={Id}
            type={Receita}
            ingredients={DetailedRecipe}
          />
        </Link>
          </div>
        </div>
      </div>

      <div className="details__ingredients-container">
        <img className="mobile-image__configuration" src={need} />
        <h2 className="title__ingredients-list">You gonna need...</h2>
        <ul className="details__ingredients-list">
          <IngredientList array={DetailedRecipe} />
        </ul>
      </div>

      <div className="details__ingredients-container">
        <img className="mobile-image__configuration" src={prepar} />
        <h2 className="title__ingredients-list">Get to work</h2>
        <div className="get__ready-cook">
          <p className="ingredients__configurations">
            {DetailedRecipe.Instructions}
          </p>
        </div>
        {/* {Receita === "comidas" ? (
          <iframe title="mov" src={DetailedRecipe.youlink} />
        ) : null} */}
      </div>
      <div className="cocktail-row">
        <img className="make__own-image mobile-image__configuration" src={makeOwn} />
        <div className="cocktail-column">
          <h6 className="description__make-own">MAKE ON YOUR OWN</h6>
          <p className="description__text-field">
            Our chefs made the recipe in the most affordable way for you to make
            it at home.
          </p>
          <div className="share-favorite__config">
         <ShareButton type={Receita} id={Id} datatestid="share-btn" />
          <FavoriteButton
            recipe={DetailedRecipe}
            id={Id}
            type={Receita}
          />
        </div>
        </div>
      </div>
      <div className="chef__favorites">
        <h2 className="title__chef-favorites">To Whom It May Concern</h2>
      </div>
      <div className="sugestions">
        {RecomendedRecipe && (
          <RecomendList list={RecomendedRecipe} type={Receita} id={Id} />
        )}
      </div>
    </div>
  );
}

const { bool, string, shape, objectOf } = PropTypes;
Details.propTypes = {
  Receita: string.isRequired,
  Id: string.isRequired,
  DetailedRecipe: shape({
    tittle: string.isRequired,
    img: string.isRequired,
    type: string,
    category: string.isRequired,
    Instructions: string.isRequired,
    tag: string.isRequired,
    ingredients: string.isRequired,
    measures: string.isRequired,
  }).isRequired,
  RecomendedRecipe: objectOf(string.isRequired).isRequired,
  InProgress: bool.isRequired,
};

export default Details;
