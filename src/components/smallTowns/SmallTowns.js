import React from 'react';
import './SmallTowns.scss';
import SmallTownChild from './SmallTownChild';

import racoon from '../../resources/img/racoon.png';

class SmallTowns extends React.Component {
    state = {
        streetNumbers:[0,1,2,3,4]
    };

    rotateArrayNext = async () => {
        const arr=this.state.streetNumbers;
        const lastElement = arr.pop();
        await this.setState({streetNumbers:[lastElement,...arr]});
    };

    rotateArrayPrev = async () => {
        const arr=this.state.streetNumbers;
        const firstElement = arr.shift();
        await this.setState({streetNumbers:[...arr,firstElement]});
    }; 
    
    render(){
        return (
            <div className="SmallTowns">
                <h2>SMALL TOWNS</h2>
                <div className="SmallTownsContent">
                    <div className="smallTowns-carousel" onClick={this.rotateArrayPrev}>
                        <ion-icon size="large" name="chevron-back-outline"  ></ion-icon>
                    </div>
                    <div className="smallTowns-carousel smallTowns-carouselNext" onClick={this.rotateArrayNext}>
                        <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
                    </div>
                    <div className="smallTowns-animal">
                        <div className="smallTowns-animal-wrap"> 
                            <div className="smallTowns-animal-racoon">
                                <img src={racoon} alt="racoon" />
                            </div>   
                        </div>                 
                    </div>
                    <div className="smallTowns-street" >
                        <div className="p-0 smallTowns-building" style={{transform:`translateX(${this.state.streetNumbers[0]}00%)`,zIndex:this.state.streetNumbers[0]%4}} >
                            <SmallTownChild streetNumber={0} onclick={this.props.searchTerm} />               
                        </div>
                        <div className="p-0 smallTowns-building" style={{transform:`translateX(${this.state.streetNumbers[1]}00%)`,zIndex:this.state.streetNumbers[1]%4 }} >
                            <SmallTownChild streetNumber={1} onclick={this.props.searchTerm} />               
                        </div>
                        <div className="p-0 smallTowns-building" style={{transform:`translateX(${this.state.streetNumbers[2]}00%)` ,zIndex:this.state.streetNumbers[2]%4}} >
                            <SmallTownChild streetNumber={2} onclick={this.props.searchTerm} />               
                        </div>
                        <div className="p-0 smallTowns-building" style={{transform:`translateX(${this.state.streetNumbers[3]}00%)`,zIndex:this.state.streetNumbers[3]%4 }} >
                            <SmallTownChild streetNumber={3} onclick={this.props.searchTerm} />               
                        </div>  
                        <div className="p-0 smallTowns-building" style={{transform:`translateX(${this.state.streetNumbers[4]}00%)`,zIndex:this.state.streetNumbers[4]%4 }} >
                            <SmallTownChild streetNumber={4} onclick={this.props.searchTerm} />               
                        </div>                          
                    </div>
                </div>
            </div>
        );
    }
    
};

export default SmallTowns;