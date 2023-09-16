import React from "react";

import Carousel from "react-bootstrap/Carousel";
import SEVENTEEN from "../img/SEVENTEEN.jpeg";
import RTL from "../img/readytolove.jpeg";
function KPOP(){
    return (
        <div className = "carousel-container row">
            <div className = "d-flex align-items-center justify-content-center">
                <Carousel className = "carousel">
                    <Carousel.Item>
                    <img src = {SEVENTEEN} alt = "seventeen" />
                    <Carousel.Caption>
                        <h2>Rock with You Era</h2>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src = {RTL} alt = "readytolove" />
                    <Carousel.Caption>
                        <h2>Ready To Love Era</h2>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        

        <div className = "d-flex align-items-center justify-content-center">
            
            <p>Seventeen is my all time favorite kpop group.</p>
            <p>Some fun facts about the group: </p>
            <ul>
                <li>Seventeen has 3 subunits: Hiphop team, Performance team, Vocal team, and BSS.</li>
                <li>There are 2 Chinese members and 2 American members.</li>
                <li>They are a self-producing group. </li>
            </ul>

        </div>
       </div> 
    )
}

export default KPOP;