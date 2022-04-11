import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import ShareButton from "./ShareButton";
import "./CookedRecipesCard.css";

export default function CookedRecipesCard({
  index,
  image,
  type,
  category,
  alcoholicOrNot,
  name,
  doneDate,
  tags,
  area,
  id,
}) {
  const lenghtTag = 2;
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
        {/* <ShareButton
            id={ id }
            type={ `${type}s` }
            datatestid={ `${index}-horizontal-share-btn` }
          /> */}
        <p
          className="done__recipes--subtitles"
          data-testid={`${index}-horizontal-done-date`}
        >
          {doneDate}
        </p>
        {tags.slice(0, lenghtTag).map((tag) => (
          <p
            className="done__recipes--subtitles"
            key={tag}
            data-testid={`${index}-${tag}-horizontal-tag`}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}

CookedRecipesCard.propTypes = {
  index: PropTypes.number,
  image: PropTypes.image,
  type: PropTypes.string,
  category: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string,
  doneDate: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  area: PropTypes.string,
  id: PropTypes.number,
}.isRequired;
