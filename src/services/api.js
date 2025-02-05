import axios from 'axios';

// Spoonacular API setup
const SPOONACULAR_API_KEY = process.env.REACT_APP_API_KEY;//create your own api keys
const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY;//create your own api keys

const spoonacularAPI = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: SPOONACULAR_API_KEY
  }
});

// Search recipes by dish name
export const searchRecipes = async (query) => {
  const response = await spoonacularAPI.get('/complexSearch', {
    params: { query }
  });
  return response.data.results;
};

// Get recipe details by ID
export const getRecipeDetails = async (id) => {
  const response = await spoonacularAPI.get(`/${id}/information`);
  return response.data;
};

// Search YouTube videos for the recipe
export const searchYouTubeVideos = async (query) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      key: YOUTUBE_API_KEY
    }
  });
  return response.data.items;
};
