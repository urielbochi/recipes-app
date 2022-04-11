import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RecomendList.css'

const RecomendListHandle = (array, type) => {
  const recomendlegth = 6;
  if (array === null || array === undefined || type === undefined) return <p>Erro</p>;
  if (type === 'comidas' && array.drinks) {
    const obj = array.drinks.map((n, index) => (
      <Link key={ index } to={ `/bebidas/${n.idDrink}` }>
        <div
          className="commend__list-container"
          data-testid={ `${index}-recomendation-card` }
        >
          <img className="commend__image" alt="recomendamos!" src={ n.strDrinkThumb } />
          <p
            data-testid={ `${index}-recomendation-title` }
            className="recipeName"
          >
            {n.strDrink}
          </p>
        </div>

      </Link>
    ));
    return obj.slice(0, recomendlegth);
  }
  if (type === 'bebidas' && array.meals) {
    const obj = array.meals.map((n, index) => (
      <Link key={ index } to={ `/comidas/${n.idMeal}` }>
        <div
          className="commend__list-container"
          data-testid={ `${index}-recomendation-card` }
        >
          <img className="commend__image" alt="recomendamos!" src={ n.strMealThumb } />
          <p
            data-testid={ `${index}-recomendation-title` }
            className="recipeName"
          >
            {n.strMeal}
          </p>
        </div>
      </Link>
    ));
    return obj.slice(0, recomendlegth);
  }
};

const RecomendExist = (objeto) => {
  if (objeto === null || objeto === undefined) return null;
  return objeto;
};

export default function RecomendList(props) {
  const { type, list } = props;
  return (
    <>
      {RecomendListHandle(RecomendExist(list), type)}
    </>
  );
}

const { string, objectOf } = PropTypes;
RecomendList.propTypes = {
  type: string.isRequired,
  list: objectOf(string.isRequired).isRequired,
};
