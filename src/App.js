import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Layout2 from './layouts/Layout2';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route index element = {<Home />} />
        <Route path = "/about" element = {<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
