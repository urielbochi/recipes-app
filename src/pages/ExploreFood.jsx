import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { foodRandomFetch } from "../redux/actions/actionFood";
import "./ExploreDrink.css";
import "./ExploreFood.css";
import exploreFood from '../images/exploreFood.png'


function ExploreFood() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(foodRandomFetch());
  }, [dispatch]);

  const randomID = useSelector(({ foodReducer }) => foodReducer.foodRandom);

  return (
    <>
      <div className="explore__food-header-padding">
        <Header title="Discover Food" />
      </div>
      <div className="explore__column-container">
      <img className="explore-image-general-config" src={exploreFood} /> 
      <h1 className="discover__food-h1-title">Discover unique flavors</h1>

        <Link
          to="/explorar/comidas/ingredientes"
          data-testid="explore-by-ingredient"
        >
          <button className="button__explore-ingredients" type="button">
            By ingredients
          </button>
        </Link>
        <Link to="/explorar/comidas/area" data-testid="explore-by-area">
          <button className="button__explore-ingredients" type="button">
            By Origin
          </button>
        </Link>
        <Link to={`/comidas/${randomID}`} data-testid="explore-surprise">
          <button className="button__explore-ingredients" type="button">
            Surprise me
          </button>
        </Link>
      </div>
    </>
  );
}

export default ExploreFood;
