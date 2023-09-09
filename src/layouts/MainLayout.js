import React from 'react';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';

const MainLayout = ({children}) => {
    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href= {<Home/>}>Home</a></li>
                        <li><a href={<AboutMe />}>About Me</a></li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );
};

export default MainLayout;