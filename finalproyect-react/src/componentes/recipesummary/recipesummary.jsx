import React from 'react';
import './RecipeSummary.css';

function RecipeSummary({ nutritionScore }) {
  return (
    <div className="recipe-summary">
      <h2>Resumen de la Receta</h2>
      <p>Puntaje Nutricional: {nutritionScore}</p>
    </div>
  );
}

export default RecipeSummary;
