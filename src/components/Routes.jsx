import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import MainFood from '../pages/MainFood';
import MainDrink from '../pages/MainDrink';
import Explore from '../pages/Explore';
import ExploreFood from '../pages/ExploreFood';
import ExploreDrink from '../pages/ExploreDrink';
import FoodPerIngredient from '../pages/FoodPerIngredient';
import DrinkPerIngredient from '../pages/DrinkPerIngredient';
import ExplorePerArea from '../pages/ExplorePerArea';
import Profile from '../pages/Profile';
import CookedRecipies from '../pages/CookedRecipes';
import FavoriteRecipies from '../pages/FavoriteRecipies';
import RecipeDetails from '../pages/RecipeDetails';
import InProgressRecipe from '../pages/InProgressRecipe';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/recipes-app/" component={ Login } />
      <Route exact path="/comidas" component={ MainFood } />
      <Route exact path="/bebidas" component={ MainDrink } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreFood } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ FoodPerIngredient }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ DrinkPerIngredient }
      />
      <Route exact path="/explorar/comidas/area" component={ ExplorePerArea } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/receitas-feitas" component={ CookedRecipies } />
      <Route exact path="/receitas-favoritas" component={ FavoriteRecipies } />
      <Route
        exact
        path="/:type/:id/in-progress"
        component={ InProgressRecipe }
      />
      <Route exact path="/:receita/:id"><RecipeDetails /></Route>
      <Route exact path="/explorar/bebidas/area" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
