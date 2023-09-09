import React from 'react';

const Layout2 = ({children}) => {
    return(
        <div>
            <header>
                <h1>Alternative layout</h1>
                <nav>
                    <ul>
                        <li><a href = "../components/Home">Home</a></li>
                        <li><a href = "../components/AboutMe">About Me</a></li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );
};

export default Layout2;