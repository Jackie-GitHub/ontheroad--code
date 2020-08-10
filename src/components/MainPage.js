import React from 'react';
import './MainPage.scss';

import bigcityM from '../resources/img/newyorkcitystreet.jpg';
import smallTownsM from '../resources/img/smalltown.jpg';
import natureM from '../resources/img/nature.jpg';
import sunlight from '../resources/img/sunlight.png';
import sunlight2 from '../resources/img/sunlight2.png';
import sunlight3 from '../resources/img/sunlight3.png';

const MainPage = (props) => {
    return (
        <div>
            <div className="HeaderHeight">
            </div>
            <div className="MainPage">
                <div className="bigcities" onClick={()=>{props.onclickToTop('bigCities')}} >
                    <div className="MainPage-Image">
                        <img src={bigcityM} alt = 'big city img'></img>
                    </div>
                    <div className="MainPage-Sunlight">
                        <img src={sunlight2} alt = 'sunlight'></img>
                    </div>
                    <div className="MainPage-Text">
                        <h4>big cities</h4>
                    </div>                    
                </div>
                <div className="smalltowns" onClick={()=>{props.onclickToTop('smallTowns')}}>
                    <div className="MainPage-Image">
                        <img src={smallTownsM} alt = 'small town img'></img>
                    </div>
                    <div className="MainPage-Sunlight">
                        <img src={sunlight3} alt = 'sunlight'></img>
                    </div>
                    <div className="MainPage-Text">
                        <h4>small towns</h4>
                    </div>                
                </div>
                <div className="nature" onClick={()=>{props.onclickToTop('nature')}}>
                    <div className="MainPage-Image">
                        <img src={natureM} alt = 'nature img'></img>
                    </div>
                    <div className="MainPage-Sunlight">
                        <img src={sunlight} alt = 'sunlight'></img>
                    </div>
                    <div className="MainPage-Text">
                        <h4>nature</h4>
                    </div>
                </div>            
            </div>
        </div>
        
    );
};

export default MainPage;