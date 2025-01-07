import React from 'react';
import './IngredientList.css';

function IngredientList({ setSelectedIngredients }) {
  const ingredients = [
    { id: 1, name: 'Pollo', category: 'Proteínas', nutrition: 10 },
    { id: 2, name: 'Arroz', category: 'Carbohidratos', nutrition: 5 },
    { id: 3, name: 'Zanahoria', category: 'Vegetales', nutrition: 3 },
    // Más ingredientes...
  ];

  return (
    <div className="ingredient-list">
      <h2>Lista de Ingredientes</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.id} onClick={() => setSelectedIngredients(prev => [...prev, ingredient])}>
            {ingredient.name} ({ingredient.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
