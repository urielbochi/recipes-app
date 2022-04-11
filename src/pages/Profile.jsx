import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Profile.css';

function Profile() {
  const emailFromUser = localStorage.getItem('user');
  const renderUser = JSON.parse(emailFromUser);
  const handleLocalStorage = () => {
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('user');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  };
  return (
    <>
    <div className='profile__headpadding'>
      <Header title="Profile" />
      </div>
      <div className="profile-container">
        <h3
          className="profile-email"
          data-testid="profile-email"
        >
         We are happy to see you back there { renderUser.email }

        </h3>
        <Link to="receitas-feitas">
          <button
            className="general-profile-button"
          >
            Done recipes

          </button>
        </Link>
        <Link to="receitas-favoritas">
          <button
            data-testid="profile-favorite-btn"
            className="general-profile-button"
          >
            My favorite Recipes

          </button>
        </Link>
        <Link to="/recipes-app">
          <button
            className="general-profile-button"
            data-testid="profile-logout-btn"
            onClick={ handleLocalStorage }
          >
            Logout
          </button>
        </Link>
      </div>
    </>
  );
}

export default Profile;
