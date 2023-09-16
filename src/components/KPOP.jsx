import React from "react";

import Carousel from "react-bootstrap/Carousel";
import SEVENTEEN from "../img/SEVENTEEN.jpeg";
import RTL from "../img/readytolove.jpeg";
import FML from "../img/fml.png";
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
                    <Carousel.Item>
                    <img src = {FML} alt = "fml" />
                    <Carousel.Caption>
                        <h2>Super Era</h2>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        
       </div> 
    )
}

export default KPOP;