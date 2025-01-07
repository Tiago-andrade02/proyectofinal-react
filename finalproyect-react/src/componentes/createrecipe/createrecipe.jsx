import React, { useState, useEffect } from 'react';
import IngredientList from '../ingredientlist/ingredientlist.jsx';
import RecipeBuilder from '../recipebuilder/recipebuilder.jsx';
import RecipeSummary from '../recipesummary/recipesummary.jsx';
import './CreateRecipe.css';

function CreateRecipe({ saveRecipe, setView }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [recipeName, setRecipeName] = useState('');
  const [nutritionScore, setNutritionScore] = useState(0);

  useEffect(() => {
    const calculateNutritionScore = () => {
      let score = 0;
      selectedIngredients.forEach(ingredient => {
        score += ingredient.nutrition * (quantities[ingredient.id] || 1);
      });
      setNutritionScore(score);
    };
    calculateNutritionScore();
  }, [selectedIngredients, quantities]);

  const handleSaveRecipe = () => {
    const newRecipe = { name: recipeName, ingredients: selectedIngredients, quantities, nutritionScore };
    saveRecipe(newRecipe);
    setView('recipe-history');
  };

  return (
    <div className="create-recipe">
      <h1>Crear Receta</h1>
      <input type="text" placeholder="Nombre de la receta" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
      <IngredientList setSelectedIngredients={setSelectedIngredients} />
      <RecipeBuilder selectedIngredients={selectedIngredients} quantities={quantities} setQuantities={setQuantities} />
      <RecipeSummary nutritionScore={nutritionScore} />
      <button onClick={handleSaveRecipe}>Guardar Receta</button>
    </div>
  );
}

export default CreateRecipe;


