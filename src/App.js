import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import RecipeDetails from './components/RecipeDetails';
import Navbar from './components/Navbar'; 
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
