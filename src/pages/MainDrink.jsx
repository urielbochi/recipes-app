import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import DrinkCard from "../components/DrinkCard";
import {
  drinkCategoriesFetch,
  drinkListFetch,
} from "../redux/actions/actionDrink";
import drink from "../images/drinking.jpeg";
import DrinkCategories from "../components/DrinkCategories";
import "./FoodCards.css";
import "./MainFood.css";
import "animate.css";

function MainDrink() {
  const dispatch = useDispatch();
  const isClicked = useSelector(
    ({ drinkReducer }) => drinkReducer.drinkIsClicked
  );
  useEffect(() => {
    if (!isClicked) {
      dispatch(drinkListFetch());
    }
    dispatch(drinkCategoriesFetch());
  }, [dispatch, isClicked]);

  const drinkCardList = useSelector(
    ({ drinkReducer }) => drinkReducer.drinkCardList
  );

  if (drinkCardList === []) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Header title="Cocktails" />
      <div className="drink__carousel-right">
      <img className="main__drink-carousel" src={drink}/>
      <p className="text-absolute__config">EXOTIC DRINKS</p>
      </div>
      <DrinkCategories />
      <div className="drinks__order">
        {drinkCardList.map((item, index) => (
          <Link to={`/bebidas/${item.idDrink}`} key={item.idDrink}>
            <DrinkCard drink={item} index={index} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainDrink;
