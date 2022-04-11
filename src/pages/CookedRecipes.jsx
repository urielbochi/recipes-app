import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CookedRecipesCard from "../components/CookedRecipesCard";
import Header from "../components/Header";
import "./CookedRecipes.css";
import cookeRecipes from "../images/cookedRecipe.png";

function CookedRecipies() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const local = JSON.parse(localStorage.getItem("doneRecipes"));
  useEffect(() => {
    setDoneRecipes(local);
  }, []);

  const filterAll = () => {
    setDoneRecipes(local);
  };

  const filterType = (type) => {
    const filteredFood = local.filter((item) => item.type === type);
    setDoneRecipes(filteredFood);
  };

  if (!doneRecipes) {
    return (
      <>
        <Header title="Done Recipes" />
        <h1>ERRO</h1>
      </>
    );
  }
  return (
    <div>
      <div className="done-recipes__head-fix">
        <Header title="Done Recipes" />
      </div>
      <div className="done__recipes-flex-buttons">
        <img className="done__recipes-image-fig" src={cookeRecipes} />

        <div className="done__recipes-column-buttons">
          <button
            className="done-recipes__buttons-style"
            onClick={filterAll}
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
        {doneRecipes.map((item, index) => (
          <CookedRecipesCard
            key={item.id}
            index={index}
            id={item.id}
            type={item.type}
            category={item.category}
            alcoholicOrNot={item.alcoholicOrNot}
            name={item.name}
            image={item.image}
            doneDate={item.doneDate}
            tags={item.tags}
            area={item.area}
          />
        ))}
      </div>
    </div>
  );
}

export default CookedRecipies;
