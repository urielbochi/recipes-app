import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Explore.css";
import discover from '../images/discover.png'

function Explore() {
  return (
    <>
      <div className="explore__header-general-padding">
        <Header title="Discover" />
      </div>
      <div className="explore">
        <img className="explore__discover-general" src={discover} />
        <h1 className="seeking__h1-title">Seeking for something specific?</h1>
        <Link to="/explorar/comidas">
          <button
            className="button__explore-ingredients"
            type="button"
          >
            Explore food
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            className="button__explore-ingredients"
            data-testid="explore-drinks"
            type="button"
          >
            Explore cocktails
          </button>
        </Link>
      </div>
    </>
  );
}

export default Explore;
