import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import FavoriteRecipesCard from '../components/FavoriteRecipesCard';
import './CookedRecipies.css';

function FavoriteRecipies() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const local = JSON.parse(localStorage.getItem('favoriteRecipes'));
  useEffect(() => {
    setFavoriteRecipes(local);
  }, []);

  const filterType = (type) => {
    if (type === 'all') {
      setFavoriteRecipes(local);
    } else {
      const filteredFood = local.filter((item) => item.type === type);
      setFavoriteRecipes(filteredFood);
    }
  };
  if (!favoriteRecipes) {
    return (
      <>
        <Header title="Receitas Favoritas" />
        <h1>ERRO</h1>
      </>
    );
  }
  return (
    <div>
      <Header title="Receitas Favoritas" />
      <div className="btn-cooked-recip">
        <Button
          onClick={ () => filterType('all') }
          data-testid="filter-by-all-btn"
        >
          All
        </Button>
        <Button
          data-testid="filter-by-food-btn"
          onClick={ () => filterType('comida') }
        >
          Food
        </Button>
        <Button
          data-testid="filter-by-drink-btn"
          onClick={ () => filterType('bebida') }
        >
          Drinks
        </Button>
      </div>
      {favoriteRecipes.map((item, index) => (
        <FavoriteRecipesCard
          key={ item.id }
          index={ index }
          id={ item.id }
          type={ item.type }
          category={ item.category }
          alcoholicOrNot={ item.alcoholicOrNot }
          name={ item.name }
          image={ item.image }
          area={ item.area }
        />))}
    </div>
  );
}

export default FavoriteRecipies;
