import * as React from "react";
import "../styles/Main.css";
import  {useState} from "react";
import axios from "axios";
import Current from "./Current_weather";
import Days5 from "./5days_weather";

function Main() {
    const [isLoading, setLoading] = useState('');  // Флаг готовности результата axios
    const [city, setCity] = useState(''); // отслеживаем изменение города
    const [cityweather, setCityweather] = useState('');
    const [widgetname, setWidget] = useState('current'); // Отслеживаем какой виджет (компонент) показывать    
    const [weather, setWeather] = useState([]);
    const key_openweathermap="778ccb3185c039e8fb72aadc36d0d223";  
       
      const search = () => {             
        setLoading('400');
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},'RUS'&appid=${key_openweathermap}&units=metric`).then(res => {
                setLoading(res.data.cod);
                setCityweather(city)
                setWeather(res.data.list.filter(reading => reading.dt_txt.includes("12:00:00")));    
            });          
      };

    return (
        <main>
            <div className="cover">
                <div className='button'>
                    <input type="text" name="myCity" onChange={e=>setCity(e.target.value)}/>                    
                    <button onClick={search}>Найти меня</button>      
                                       
                    <label> <input onChange={e=>setWidget("current")} type="radio" name="RadioWeather" value="current" defaultChecked={true} /> Сегодня </label>
                    <label><input onChange={e=>setWidget("5days")} type="radio" name="RadioWeather" value="5days " /> На 5 дней </label>                                                           
                </div>               

                {(isLoading!='200') &&
                <div>
                    <h1>Город не найден. Введите название города </h1>
                </div>
                }

                {(widgetname === "current"&&isLoading==='200') &&
                    <div className="widgets">                       
                        
                            <Current key1={key_openweathermap} city={cityweather} icon={weather[0].weather[0].icon} day={weather[0].dt_txt}
                        feels_like={weather[0].main.feels_like} temp={weather[0].main.temp} wind_speed={weather[0].wind.speed}/>   
                    </div>
                }
                
                {(widgetname === "5days"&&isLoading==='200') &&
                    <div>
                        <div>
                            <h3>{cityweather}</h3>
                        </div>
                        <div className="widgets">
                            
                            {weather.map((value,index) =>                                
                                <Days5 day={value.dt_txt} temp={value.main.temp} icon={value.weather[0].icon} wind_speed={value.wind.speed}/>
                            )}
                        </div>
                    </div>
                }

            </div>
        </main>
    );
};

export default Main;
