import React from 'react';
import './SmallTownChild.scss';

import smalltown1 from '../../resources/img/st-Rothenburg ob der Tauber, Germany.jpg';
import smalltown2 from '../../resources/img/st-Shirakawa-go, Japan.jpg';
import smalltown3 from '../../resources/img/st-Luang Prabang, Laos.jpg';
import smalltown4 from '../../resources/img/st-Port Fairy, Australia.jpg';
import smalltown5 from '../../resources/img/st-Zhouzhuang, China.jpg';

import street01 from '../../resources/img/street01.jpg';
import street02 from '../../resources/img/street02.jpg';
import street03 from '../../resources/img/street03.jpg';
import street04 from '../../resources/img/street04.jpg';
import street05 from '../../resources/img/street05.jpg';

const SmallTownChild = ({streetNumber,onclick}) => {
    let town = {};
    switch (streetNumber) {
        case 0:
            town = {name:'Luang Prabang, Laos', src:smalltown3,background:street01 };
            break;
        case 1:
            town = {name:'Zhouzhuang, China', src:smalltown5,background:street02 };
            break;
        case 2:
            town = {name:'Rothenburg, Germany', src:smalltown1,background:street03 };
            break;
        case 3:
            town = {name:'Port Fairy, Australia', src:smalltown4,background:street04 };
            break;
        case 4:
            town = {name:'Shirakawa, Japan', src:smalltown2,background:street05 };
            break;
        default:
            town = {};
    }
    return (
        <div className="SmallTowns-building" style={{backgroundImage:`url(${town.background})`}}  >
            <h5 onClick={()=>{onclick(town.name.split(",")[0],town.name)}}>{town.name}</h5>
            <div className="SmallTowns-imageFrame" onClick={()=>{onclick(town.name.split(",")[0],town.name)}}>
                <img src={town.src} alt="smalltown1" />
            </div>
        </div>
    );
};

export default SmallTownChild;