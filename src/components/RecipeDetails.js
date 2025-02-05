import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails, searchYouTubeVideos } from '../services/api';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const recipeData = await getRecipeDetails(id);
      setRecipe(recipeData);

      const videoResults = await searchYouTubeVideos(recipeData.title + ' recipe');
      setVideos(videoResults);
    };

    fetchData();
  }, [id]);

  if (!recipe) return <p style={{fontSize:'20px',display:'-webkit-inline-flex',justifyContent:"center",alignContent:'center'}}>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-bold">Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mt-4">Procedure</h2>
      {recipe.instructions}

      <h2 className="text-2xl font-bold mt-4">Watch on YouTube</h2>
      <div className="grid grid-cols-2 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="border p-2 rounded shadow">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-32 object-cover rounded" />
              <h3 className="text-lg font-bold mt-2">{video.snippet.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
