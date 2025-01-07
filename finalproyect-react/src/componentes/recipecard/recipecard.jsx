import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  const defaultImage = "https://example.com/default-food-image.jpg"; 
  return (
    <li className="recipe-card">
      <h3>{recipe.name}</h3>
      <img src={recipe.image || defaultImage} alt={recipe.name} className="food-image" />
      <p>Puntaje Nutricional: {recipe.nutritionScore}</p>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.name} (Cantidad: {recipe.quantities[ingredient.id]})</li>
        ))}
      </ul>
    </li>
  );
}

export default RecipeCard;

