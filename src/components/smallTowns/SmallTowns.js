import React from 'react';
import './SmallTowns.scss';
import SmallTownChild from './SmallTownChild';

import racoon from '../../resources/img/racoon.png';

class SmallTowns extends React.Component {
    state = {
        streetNumbers:[0,1,2,3,4]
    };

    rotateArrayNext = () => {
        this.setState((prevState)=>{
            const arr=[...prevState.streetNumbers];
            const lastElement = arr.pop();
            return {
                streetNumbers:[lastElement,...arr]
            }
        });
    };

    rotateArrayPrev = () => {
        this.setState((prevState)=>{
            const arr=[...prevState.streetNumbers];
            const firstElement = arr.shift();
            return {
                streetNumbers:[...arr,firstElement]
            }
        });
    }; 

    clickable = true;
    lockClick = () =>{
        this.clickable = false;
        setTimeout(()=>{
            this.clickable = true
        },550)
    }
    
    render(){
        return (
            <div className="SmallTowns">
                <h2>SMALL TOWNS</h2>
                <div className="SmallTownsContent">
                    <div className="smallTowns-carousel" 
                        onClick={()=>{
                            if (this.clickable) {
                                this.rotateArrayPrev();
                            }
                            this.lockClick();
                        }}>
                        <ion-icon size="large" name="chevron-back-outline"  ></ion-icon>
                    </div>
                    <div className="smallTowns-carousel smallTowns-carouselNext" onClick={()=>{
                            if (this.clickable) {
                                this.rotateArrayNext();
                            }
                            this.lockClick();
                        }}>
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