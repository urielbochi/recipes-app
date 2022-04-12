import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  foodPerAreaAllFetch,
  foodPerAreaFilterFetch,
  foodPerAreaListFetch,
} from "../redux/actions/actionFood";
import "./FoodCards.css";
import "./Explore.css";
import "./ExplorePerArea.css";

function ExplorePerArea() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(foodPerAreaListFetch());
    dispatch(foodPerAreaAllFetch());
  }, [dispatch]);

  const handleChange = ({ target: { value: area } }) => {
    if (area === "All") {
      dispatch(foodPerAreaAllFetch());
    } else {
      dispatch(foodPerAreaFilterFetch(area));
    }
  };

  const foodPerAreaList = useSelector(
    ({ foodReducer }) => foodReducer.foodPerAreaList
  );
  const foodPerAreaFilter = useSelector(
    ({ foodReducer }) => foodReducer.foodPerAreaFilter
  );

  return (
    <>
      <div className="header__discover-padding-fix">
        <Header title="Discover by Origin" />
      </div>
      <div className="origin__container">
        <select data-testid="explore-by-area-dropdown" onChange={handleChange}>
          <option data-testid="All-option" value="All">
            All
          </option>
          {foodPerAreaList.map((area) => (
            <option
              key={area.strArea}
              data-testid={`${area.strArea}-option`}
              value={area.strArea}
            >
              {area.strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="explore__origin-container">
        {foodPerAreaFilter.map((item, index) => (
          <Link to={`/comidas/${item.idMeal}`} key={item.idMeal}>
            <FoodCard food={item} index={index} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ExplorePerArea;
