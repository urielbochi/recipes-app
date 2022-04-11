import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import './CookedRecipesCard.css';
import '../pages/CookedRecipes.css'


export default function FavoriteRecipesCard({
  index,
  image,
  type,
  category,
  alcoholicOrNot,
  name,
  area,
  id,
}) {
  return (
    <div className="cooked-recipes__flex">
    <Link to={`/${type}s/${id}`}>
      <img src={image} alt="foto-da-api-" className="cooke-recipes__image-config" />
    </Link>
    <div className="cooked-recipes__flex-column">
      <Link to={`/${type}s/${id}`}>
        <h1 className="done__recipes--title">{name}</h1>
      </Link>
      <p
        className="done__recipes--subtitles"
        data-testid={`${index}-horizontal-top-text`}
      >
        {alcoholicOrNot}
        {`${area} - ${category}`}
      </p>
      <div className="toptext-icon">
          <ShareButton
            datatestid={ `${index}-horizontal-share-btn` }
            id={ id }
            type={ `${type}s` }
          />
          <FavoriteButton
            isClicked
            id={ id }
            type={ type }
            datatestid={ `${index}-horizontal-favorite-btn` }
          />
        </div>
    </div>
  </div>
);
}
    






FavoriteRecipesCard.propTypes = ({
  index: PropTypes.number,
  image: PropTypes.image,
  type: PropTypes.string,
  category: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string,
  area: PropTypes.string,
  id: PropTypes.number,
}).isRequired;
