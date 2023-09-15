import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Layout2 from './layouts/Layout2';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import FormLayout from "./layouts/FormLayout";

function App() {
  return (
    <div>
    
      <Routes> 
        <Route path = "/main" element = {<MainLayout />} />
        <Route path = "/layout" element = {<Layout2 />} />
        <Route path = "/form" element = {<FormLayout/>} />
      </Routes>
    
    </div>
  );
}

export default App;
