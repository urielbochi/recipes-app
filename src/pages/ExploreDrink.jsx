import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { drinkRandomFetch } from "../redux/actions/actionDrink";
import search from '../images/searching.png'
import "./ExploreDrink.css";

function ExploreDrink() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(drinkRandomFetch());
  }, [dispatch]);
  const randomID = useSelector(({ drinkReducer }) => drinkReducer.drinkRandom);
  return (
    <>
      <div className="explore__header-padding">
        <Header title="Explore drinks"/>
      </div>
      <div className="explore__column-container">
      <img className="explore-image-general-config" src={search} />
      <h1 className="discover__food-h1-title">Toast to something tasty</h1> 
        <Link
          to="/explorar/bebidas/ingredientes"
        >
          <button className="button__explore-ingredients" type="button">
            By ingredients
          </button>
        </Link>
        <Link to={`/bebidas/${randomID}`} data-testid="explore-surprise">
          <button className="button__explore-ingredients" type="button">
            Surprise me
          </button>
        </Link>
      </div>
    </>
  );
}

export default ExploreDrink;
