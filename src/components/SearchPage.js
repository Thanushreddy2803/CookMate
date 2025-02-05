import React, { useState } from 'react';
import { searchRecipes } from '../services/api';
import RecipeCard from './RecipeCard';
import { text } from 'framer-motion/m';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <div style={{width:'80%',margin:'auto'}}>
      <h1 style={{textAlign:'center'}} >Search for a Recipe</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for dishes..."
          style={{width:'90%',height:'35px',justifyContent:'center',alignItems:'center'}}
          className='border p-2 rounded-lg'
        />
        <button type="submit" style={{width:'10%',height:'35px'}}>Search</button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
