import React from 'react';
import './BigCitiesTextChild.scss';

const BigCitiesTextChild = (props) => {
    return (
        <div className="BigCitiesTextChild">
            <div className="BigCitiesTextChild-Top">
                <div className="BigCitiesTextChild-title" onClick={()=>{props.onclick(props.cityname,props.cityname)}} >{props.cityname}</div>
                <p>{props.description}</p>
            </div>
            
            <div className="bookInfowrap">
                <img src={props.img} alt={props.author} />
                <div className="bookInfotext">
                    <h5>{props.author}</h5>
                    <a href={props.booklink} target="_blank" rel="noopener noreferrer">
                        <ion-icon name="book-outline"></ion-icon>
                        <h5>{props.book}</h5>
                    </a>
                </div>  
            </div>
        </div>
    );
};

export default BigCitiesTextChild;