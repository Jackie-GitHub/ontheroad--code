import React from 'react';
import './BigCities.scss';
import BigCity from './BigCity';

import newyork from '../../resources/img/NewYork.jpg';
import hongkong from '../../resources/img/HongKong.jpg';
import london from '../../resources/img/London.jpg';
import bangkok from '../../resources/img/Bangkok.jpg';
import beijing from '../../resources/img/Beijing.jpg';
import paris from '../../resources/img/Paris.jpg';
import instabul from '../../resources/img/Istanbul.jpg';
import singapore from '../../resources/img/Singapore.jpg';

const BigCities = (props) => {
    const cities=['New York, US','Hong Kong, China','London, UK','Bangkok, Thailand','Beijing, China','Paris, France','Istanbul, Turkey','Singapore'];

    const images=[newyork,hongkong,london,bangkok,beijing,paris,instabul,singapore];

    return (
        <div className="BigCities">
            <h2>BIG CITIES</h2>
            <div className="row mt-3">
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[0]} image={images[0]} onclick={props.searchTerm} />
                </div>
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[1]} image={images[1]} onclick={props.searchTerm} />
                </div>
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[2]} image={images[2]} onclick={props.searchTerm} />
                </div>
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[3]} image={images[3]} onclick={props.searchTerm} />
                </div>
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[4]} image={images[4]} onclick={props.searchTerm} />
                </div>
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[5]} image={images[5]} onclick={props.searchTerm} />
                </div>
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[6]} image={images[6]} onclick={props.searchTerm} />
                </div>
                <div className="col-6 col-md-3 p-0">
                    <BigCity city={cities[7]} image={images[7]} onclick={props.searchTerm} />
                </div>                
            </div>
        </div>
    );
};

export default BigCities;

