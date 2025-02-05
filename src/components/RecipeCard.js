import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded" />
      <div className='flex'><h3>{recipe.title}</h3></div>
      
      <Link to={`/recipe/${recipe.id}`}>
        <button className='rouded'>Let's make it</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
