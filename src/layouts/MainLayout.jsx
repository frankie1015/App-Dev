import React from 'react';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import KPOP from '../components/KPOP';

function MainLayout(){
    return(
        <div>
            <Home />
            <AboutMe />
            <KPOP />
        </div>
        
    );
}

export default MainLayout;