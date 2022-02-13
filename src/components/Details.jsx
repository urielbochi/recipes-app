import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import StartContinueDoneButton from './StartContinueDoneButton';
import IngredientList from './IngredientList';
import RecomendList from './RecomendList';
import InProgressMount from './InProgressMount';
import '../pages/RecipeDetails.css';

function Details(props) {
  const { Receita, DetailedRecipe, RecomendedRecipe, Id, InProgress } = props;
  if (InProgress) {
    return (
      <InProgressMount data={DetailedRecipe} />
    );
  }

  return (
    <div className="body-details">
      <img
        className="imgtittle"
        data-testid="recipe-photo"
        src={DetailedRecipe.img}
        alt="detalhes"
      />
      <div className='detailsTitleContainer'>
        <div className='titleColumnTest'>
        <h1 className='titleRecipesConfig' data-testid="recipe-title">{DetailedRecipe.tittle}</h1>
        <h4
          className="subTitleRecipesConfig"
          data-testid="recipe-category"
        >
          {DetailedRecipe.category}

        </h4>
        {DetailedRecipe && Receita === 'bebidas'
        ? <h3 className='subTitleRecipesConfig'>{DetailedRecipe.type}</h3>
        : null}
        </div>
        <div className='buttonsFavoriteFlex'>
        <ShareButton
          type={Receita}
          id={Id}
          datatestid="share-btn"
          />
        <FavoriteButton
          recipe={DetailedRecipe}
          id={Id}
          type={Receita}
          datatestid="favorite-btn"
          />
          </div>
        </div>

      <h2 className="title-details">Ingredientes</h2>
      <div className="ingredients">
        <ul>
          <IngredientList array={DetailedRecipe} />
        </ul>
      </div>
      <h2 className="title-details">Instruções</h2>
      <p
        className="ingredients"
        data-testid="instructions"
      >
        {DetailedRecipe.Instructions}

      </p>
      {
        Receita === 'comidas'
          ? <iframe title="mov" data-testid="video" src={DetailedRecipe.youlink} />
          : null
      }
      <h2 className="title-details title-instruct" data-testid="1-recomendation-title">Recomendadas</h2>
      <div className="sugestions">
        {RecomendedRecipe && <RecomendList
          list={RecomendedRecipe}
          type={Receita}
          id={Id}
        />}
      </div>
      <Link to={`/${Receita}/${Id}/in-progress`}>
        <StartContinueDoneButton
          id={Id}
          type={Receita}
          ingredients={DetailedRecipe}
        />
      </Link>
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
