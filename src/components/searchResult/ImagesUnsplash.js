import React from 'react';
import ImageUnsplashCard from './ImagesUnsplashCard';
import './ImagesUnsplash.scss';

const ImagesUnsplash = (props) => {
    const images = props.imagesUnsplash.map((image)=>{
        return <ImageUnsplashCard key={image.id} image={image}/>
    });
    return(
        <div>
            <div className = "ImagesUnsplashTitle">You may like:</div>
            <div className = "ImagesUnsplash">
                {images}
            </div>
        </div>
        
    )
}

export default ImagesUnsplash;
