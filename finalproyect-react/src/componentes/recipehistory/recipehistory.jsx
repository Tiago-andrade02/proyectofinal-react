import React from 'react';
import RecipeCard from '../recipecard/recipecard.jsx';
import './RecipeHistory.css';

function RecipeHistory({ recipes, setView }) {
  return (
    <div className="recipe-history">
      <h1>Historial de Recetas</h1>
      <button onClick={() => setView('home')}>Volver a Inicio</button>
      <ul>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeHistory;

