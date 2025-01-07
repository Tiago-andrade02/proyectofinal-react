import React from 'react';
import './RecipeBuilder.css';

function RecipeBuilder({ selectedIngredients, quantities, setQuantities }) {
  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
  };

  return (
    <div className="recipe-builder">
      <h2>Ingredientes Seleccionados</h2>
      <ul>
        {selectedIngredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.name}
            <input type="number" value={quantities[ingredient.id] || 1} onChange={(e) => handleQuantityChange(ingredient.id, e.target.value)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeBuilder;
