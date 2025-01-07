import React, { useState, useEffect } from 'react';
import Home from './componentes/home/home';
import CreateRecipe from './componentes/createrecipe/createrecipe';
import RecipeHistory from './componentes/recipehistory/recipehistory';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  const saveRecipe = (recipe) => {
    const newRecipes = [...recipes, recipe];
    setRecipes(newRecipes);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
  };

  return (
    <div className="App">
      {view === 'home' && <Home setView={setView} />}
      {view === 'create-recipe' && <CreateRecipe saveRecipe={saveRecipe} setView={setView} />}
      {view === 'recipe-history' && <RecipeHistory recipes={recipes} setView={setView} />}
    </div>
  );
}

export default App;
