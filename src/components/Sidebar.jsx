import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { drinkHandleClickIngredient } from "../redux/actions/actionDrink";
import { foodHandleClickIngredient } from "../redux/actions/actionFood";
import foodOne from "../images/comida1.jpeg";
import foodTwo from "../images/comida2.jpeg";
import foodThree from "../images/comida3.jpg";
import foodFour from "../images/comida4.jpeg";
import foodFive from "../images/comida5.jpeg";
import foodSix from "../images/comida6.jpeg";

import "./Sidebar.css";

function SideBar() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(drinkHandleClickIngredient(false));
    dispatch(foodHandleClickIngredient(false));
  };
  return (
    <div className="sidebar__align-config">
      <Menu width={400} right>
        <h1 className="homemade__title-sidebar">Homemade</h1>
        <p>Enjoy the best culinary experience</p>
        <div className="sidebar__food-container">
          <img className="side__bar-food-config" src={foodOne} />
          <img className="side__bar-food-config" src={foodTwo} />
          <img className="side__bar-food-config" src={foodThree} />
          <div className="sidebar__food-column">
            <img className="side__bar-food-config" src={foodFour} />
            <img className="side__bar-food-config" src={foodFive} />
            <img className="side__bar-food-config" src={foodSix} />
          </div>
        </div>
        <Link to="/bebidas" onClick={handleClick}>
          <a className="menu-item" href="/">
            Cocktails
          </a>
        </Link>
        <Link to="/comidas" onClick={handleClick}>
          <a className="menu-item" href="/comidas">
            Meals
          </a>
        </Link>
        <Link to="/explorar">
          <a className="menu-item" href="/explorar">
            Explore
          </a>
        </Link>
        <Link to="/perfil">
          <a className="menu-item" href="/profile">
            My Profile
          </a>
        </Link>
      </Menu>
    </div>
  );
}

export default SideBar;
