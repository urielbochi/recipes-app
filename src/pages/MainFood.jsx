import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";
import {
  foodCategoriesFetch,
  foodListFetch,
} from "../redux/actions/actionFood";
import FoodCategories from "../components/FoodCategories";
import logoFood from "../images/logofood.png";
import "./FoodCards.css";
import "./MainFood.css";


function MainFood() {
  const dispatch = useDispatch();
  const isClicked = useSelector(({ foodReducer }) => foodReducer.foodIsClicked);
  useEffect(() => {
    if (!isClicked) {
      dispatch(foodListFetch());
    }
    dispatch(foodCategoriesFetch());
  }, [dispatch, isClicked]);

  const foodCardList = useSelector(
    ({ foodReducer }) => foodReducer.foodCardList
  );

  if (foodCardList === []) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Header title="Meal foods" />
      <div className="main__food-logo-config">
        <img className="food__logo" src={logoFood} />
        <div className="main__food-subclass-adjust">
          <h6 className="chef__secrets">CHEFS SECRETS</h6>
          <p className="main__food-description">UNIQUE AND APPETIZING CUISINE FOR ENJOY SPECIAL MOMENTS IN LIFE</p>
        </div>
      </div>
      <div className="food__order-background">
      <h1 className="main__food-recipes-title">Recettes menu</h1>
      <FoodCategories />
      <div className="drinks__order">
        {foodCardList.map((item, index) => (
          <Link to={`/comidas/${item.idMeal}`} key={item.idMeal}>
            <FoodCard food={item} index={index} />
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default MainFood;
