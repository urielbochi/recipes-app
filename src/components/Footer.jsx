import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import drinkIcon from "../images/drinkIcon.svg";
import exploreIcon from "../images/exploreIcon.svg";
import mealIcon from "../images/mealIcon.svg";
import { drinkHandleClickIngredient } from "../redux/actions/actionDrink";
import { foodHandleClickIngredient } from "../redux/actions/actionFood";
import "./Footer.css";

function Footer() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(drinkHandleClickIngredient(false));
    dispatch(foodHandleClickIngredient(false));
  };
  const [active, setActive] = useState(false)

  const setToggle = () => {
    setActive(!active)
  }
  return (
    <div className="menu-burguer">
      <div className="list" onClick={setToggle}>
          <Link to="/bebidas" onClick={handleClick}>
            <img
              src={drinkIcon}
              alt="drinkIcon"
              data-testid="drinks-bottom-btn"
            />
          </Link>
          <Link to="/explorar">
            <img
              src={exploreIcon}
              alt="exploreIcon"
              data-testid="explore-bottom-btn"
            />
          </Link>
          <Link to="/comidas" onClick={handleClick}>
            <img src={mealIcon} alt="mealIcon" data-testid="food-bottom-btn" />
          </Link>
      </div>
    </div>
  );
}

export default Footer;
