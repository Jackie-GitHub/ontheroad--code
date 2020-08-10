import React from 'react';
import './TextCard.scss';

const TextCard = (props) => {
    return(
        <div className = 'TextCard'>
            <div className = 'Top-TextCard'>
                <div className = 'Title-TextCard'>
                    <div onClick = {()=>{props.clickTitle(props.term,props.weatherCity)}}  >
                        {props.title}
                    </div>   
                </div>
                <div className = 'Quote-TextCard'>
                    {props.quote}
                </div>
            </div>
            
            <div className = 'Bottom-TextCard'>
                <div className = 'Author-TextCard'>
                    {props.author}
                </div>
                <a className = 'Book-TextCard' href={props.link} target="_blank" rel="noopener noreferrer">
                    <img src = {props.book} alt = 'book cover'/>
                </a>                
            </div>
        </div>
    )
}

export default TextCard;