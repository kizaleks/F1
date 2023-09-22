import * as React from "react";
import  { useState } from "react";
import axios from "axios";
import "../styles/Widget.css";


function Current(props) {    
    const date = new Date();
    return (
        <div className="current">
            
                <div className="widget">
                <h2> {props.city}</h2>                    
                <h2> {props.day}</h2>
                <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="" width="100" />
                </div>

            <div className="widget">                
                <div className="wind">Ощущается: {props.feels_like}°</div>
                <div className="temp-main">{props.temp}°</div>
                <div className="wind">Ветер: {props.wind_speed}m/s</div>
            </div>
        </div>
    );
};

export default Current;

