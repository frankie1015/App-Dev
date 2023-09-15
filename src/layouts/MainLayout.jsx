import React from 'react';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';

function MainLayout(){
    return(
        <div>
            <Home />
            <AboutMe />
        </div>
        
    );
}

export default MainLayout;