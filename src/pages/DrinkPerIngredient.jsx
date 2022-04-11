import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DrinkIngredientCard from "../components/DrinkIngredientCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { drinkIngredientsListFetch } from "../redux/actions/actionDrink";
import "./FoodCards.css";
import "./Explore.css";
import "./MainFood.css";

function DrinkPerIngredient() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(drinkIngredientsListFetch());
  }, [dispatch]);

  const drinkIngredientsList = useSelector(
    ({ drinkReducer }) => drinkReducer.drinkIngredientsList
  );

  if (drinkIngredientsList === []) {
    return <p>loading...</p>;
  }
  return (
    <>
      <div className="drinkPerIngredient__padding-bottom">
        <Header title="Explorar Ingredientes" />
      </div>
      <div className="drinks__order">
        {drinkIngredientsList.map((item, index) => (
          <DrinkIngredientCard
            key={item.strIngredient1}
            title={item}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default DrinkPerIngredient;
