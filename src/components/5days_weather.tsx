import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import "../styles/Widget.css";

function Days5(props) {
    return (
        
        <div className="widget">
            <div className="panel">
                <div className="date">              
                    {props.day}                       
                </div>
                <div className="temp">
                   <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="" width="60"/>
                   {Math.round(props.temp)}°                     
                   <br></br>                 
                   {props.wind_speed}m/s
                </div>
            </div>
        </div>
    );
};

export default Days5;

