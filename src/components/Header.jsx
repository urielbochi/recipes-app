import React, { useState } from "react";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import profileIcon from "../images/profileIcon.svg";
import searchIcon from "../images/searchIcon.svg";
import "./Header.css";
import SearchBar from "./SearchBar";
import SideBar from "./Sidebar";

function Header({ title }) {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () =>
    !showInput ? setShowInput(true) : setShowInput(false);

  const renderButton = () => (
    <>
      <div>
        <button type="button" className="buttons" onClick={handleClick}>
          <img
            data-testid="search-top-btn"
            src={searchIcon}
            alt="iconProfile"
          />
        </button>
      </div>
      <div>{showInput ? <SearchBar /> : ""}</div>
    </>
  );

  return (
    <header className="header">
      <h1 className="navbar__logo-font">Homemade</h1>
      <div className="title__config">
      <h1 className="title" data-testid="page-title">
        {title}
      </h1>
      {title !== "Explorar" &&
      title !== "Explorar Comidas" &&
      title !== "Explorar Bebidas" &&
      title !== "Explorar Ingredientes" &&
      title !== "Perfil" &&
      title !== "Receitas Feitas" &&
      title !== "Receitas Favoritas"
        && ""}
        </div>
        <SideBar/>

    </header>
  );
}

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
