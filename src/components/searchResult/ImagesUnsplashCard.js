import React from 'react';
import './ImagesUnsplashCard.scss';

class ImageUnsplashCard extends React.Component{
    render(){
        const {description, urls} = this.props.image;
        return (
            <div className = 'ImagesUnsplashCard'>
                <img
                    alt={description}
                    src={urls.regular} 
                />
                <p>Above: relatead product image. Here should be the description and the price of the product.</p>
            </div>
        );
    }
}

export default ImageUnsplashCard;