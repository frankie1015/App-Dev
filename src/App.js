import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Layout2 from './layouts/Layout2';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import FormLayout from "./layouts/FormLayout";
import MyForm from "./components/MyForm";
import KPOP from "./components/KPOP";
import {SkeletonTheme} from "react-loading-skeleton";

function App() {
  return (
    <div>
      <SkeletonTheme baseColor="#D2D4DB" highlightColor="#F9FAFC">
      <Routes> 
        <Route index path = "/" element = {<Home />} />
        <Route path = "/about" element = {<AboutMe />} />
        <Route path = "/form" element = {<FormLayout/>} />
        <Route path = "/kpop" element = {<KPOP/>} />
      </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App;
