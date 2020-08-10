import React from 'react';
import './SearchResultWeather.scss';

const SearchResultWeather = (props) => {
    if (props.weatherError) {
        return null
    };
    return(
        // <div class="weather-wrap">
        //     <div>
        //         Current Local Weather:
        //     </div>
        //     <div class="weather-icon">
        //         <img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} alt="weather icon" />
        //     </div>
        //     <div class="weather-details">
        //         <div class="weather-main">
        //             {props.weather.main}
        //         </div>
        //         <div class="weather-temperature">
        //             {props.weathertTemperature.temp}
        //         </div>  
        //     </div>
        // </div>
        <div className="weather-wrap">
            <div className = 'weatherTitle'>
                Local Weather:
            </div>
            <div className = 'weatherInfo'>
                <div className="weather-icon">
                    <img src={`https://www.weatherbit.io/static/img/icons/${props.weather.icon}.png`} alt="weather icon" />
                </div>
                <div className="weather-details">
                    <div className="weather-main">
                        {props.weather.description}
                    </div>
                    <div className="weather-temperature">
                        {props.weathertTemperature}
                    </div>  
                </div>
            </div>
            
        </div>
    )
};

export default SearchResultWeather;