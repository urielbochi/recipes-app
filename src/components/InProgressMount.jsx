import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import StartContinueDoneButton from './StartContinueDoneButton';
import IngredientCheckList from './IngredientCheckList';
import './InProgressMount.css';

export default function InProgressMount(props) {
  const { data } = props;
  const [handleState, setState] = useState(false);
  const { id, type } = useParams();

  return (
    <div className="body-details">
      <img
        className="imgtittle"
        data-testid="recipe-photo"
        src={data.img}
        alt="detalhes"
      />
      <div className='detailsTitleContainer'>
        <div className='titleColumnTest'>
          <h1 className='titleRecipesConfig' data-testid="recipe-title">{data.tittle}</h1>
          <h4
            className="subTitleRecipesConfig"
            data-testid="recipe-category"
          >
            {data.category}

          </h4>
        </div>
        </div>
        <h2 className="title-details">Ingredientes</h2>

        <div className="ingredients">
          <lo
            onChange={() => setState(!handleState)}
          >
            <IngredientCheckList
              array={data}
            />
          </lo>
        </div>
        <h2 className="title-details">Instruções</h2>
        <p className="instructions" data-testid="instructions">{data.Instructions}</p>
        <Link to="/receitas-feitas">
          <StartContinueDoneButton
            id={id}
            type={type}
            ingredients={data}
          />
        </Link>
      </div>
      );
}

      const {string, shape} = PropTypes;
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
