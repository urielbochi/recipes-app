import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import FavoriteRecipesCard from "../components/FavoriteRecipesCard";
import "./CookedRecipes.css";
import favFood from '../images/favFood.png'

function FavoriteRecipies() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const local = JSON.parse(localStorage.getItem("favoriteRecipes"));
  useEffect(() => {
    setFavoriteRecipes(local);
  }, []);

  const filterType = (type) => {
    if (type === "all") {
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
      <div className="done-recipes__head-fix">
        <Header title="Favorite Foods" />
      </div>
      <div className="done__recipes-flex-buttons">
        <img className="done__recipes-image-fig" src={favFood} />

        <div className="done__recipes-column-buttons">
          <button
            className="done-recipes__buttons-style"
            onClick={() => filterType("all")}
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            className="done-recipes__buttons-style"
            data-testid="filter-by-food-btn"
            onClick={() => filterType("comida")}
          >
            Food
          </button>
          <button
            className="done-recipes__buttons-style"
            data-testid="filter-by-drink-btn"
            onClick={() => filterType("bebida")}
          >
            Drinks
          </button>
        </div>
      </div>

      <div className="done__recipes-configuration-final">
        {favoriteRecipes.map((item, index) => (
          <FavoriteRecipesCard
            key={item.id}
            index={index}
            id={item.id}
            type={item.type}
            category={item.category}
            alcoholicOrNot={item.alcoholicOrNot}
            name={item.name}
            image={item.image}
            area={item.area}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteRecipies;
