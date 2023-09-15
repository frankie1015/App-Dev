import React from "react";

import SEVENTEEN from "../img/SEVENTEEN.jpeg";

function KPOP(){
    return (
        <div className = "d-flex align-items-center justify-content-center">
            <img src = {SEVENTEEN} alt = "seventeen" />
            <p>Seventeen is my all time favorite kpop group.</p>
            <p>Some fun facts about the group: </p>
            <ul>
                <li>Seventeen has 3 subunits: Hiphop team, Performance team, Vocal team, and BSS.</li>
                <li>There are 2 Chinese members and 2 American members.</li>
                <li>They are a self-producing group. </li>
            </ul>

        </div>
    )
}

export default KPOP;