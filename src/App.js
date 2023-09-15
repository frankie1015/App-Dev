import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Layout2 from './layouts/Layout2';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import FormLayout from "./layouts/FormLayout";
import MyForm from "./components/MyForm";
import KPOP from "./components/KPOP";

function App() {
  return (
    <div>
    
      <Routes> 
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<AboutMe />} />
        <Route path = "/form" element = {<FormLayout/>} />
        <Route path = "/kpop" element = {<KPOP/>} />
      </Routes>
    
    </div>
  );
}

export default App;
