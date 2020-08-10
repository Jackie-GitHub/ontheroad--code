import React from 'react';
import './NatureActivity.scss';

class NatureActivity extends React.Component{
    state={
        transform:['0','0','0','0','0','0','0','0'],
        opacity:'0',
        scale:'0.2'
    }

    finalPosition = () => {
        const newTr=['-150%','-180%','150%','150%','-65%','-65%','65%','65%'];
        this.setState({transform:newTr,opacity:'1',scale:'1'});
    };

    startPosition = () => {
        const newTr=['0','0','0','0','0','0','0','0'];
        this.setState({transform:newTr,opacity:'0',scale:'0.2'});
    };

    render() {
        return(
            <div className="natureActivity2" onMouseLeave={this.startPosition} >
                <div className="naturePlace naturePlace0" onMouseEnter={this.finalPosition}>
                    <h6>{this.props.name}</h6>
                    <ion-icon name="add-circle-outline" size="large" ></ion-icon>
                </div>
                <div className="naturePlace" style={{transform:`translateX(${this.state.transform[0]}) scale(${this.state.scale})`,opacity:this.state.opacity*this.props.show[0]}} onClick={()=>{this.props.onclick(this.props.searchDescription[0],this.props.searchCity[0])}} >
                    <img src={this.props.images[0]} alt={this.props.places[0]}></img>
                    <div>{this.props.places[0]}</div>
                </div>
                <div className="naturePlace" style={{transform:`translateY(${this.state.transform[1]}) scale(${this.state.scale})`,opacity:this.state.opacity*this.props.show[1]}} onClick={()=>{this.props.onclick(this.props.searchDescription[1],this.props.searchCity[1])}} >
                    <img src={this.props.images[1]} alt={this.props.places[1]}></img>
                    <div>{this.props.places[1]}</div>
                </div>
                <div className="naturePlace" style={{transform:`translateX(${this.state.transform[2]}) scale(${this.state.scale})`,opacity:this.state.opacity*this.props.show[2]}} onClick={()=>{this.props.onclick(this.props.searchDescription[2],this.props.searchCity[2])}} >
                    <img src={this.props.images[2]} alt={this.props.places[2]}></img>
                    <div>{this.props.places[2]}</div>
                </div>
                <div className="naturePlace" style={{transform:`translateY(${this.state.transform[3]}) scale(${this.state.scale})`,opacity:this.state.opacity*this.props.show[3]}} onClick={()=>{this.props.onclick(this.props.searchDescription[3],this.props.searchCity[3])}} >
                    <img src={this.props.images[3]} alt={this.props.places[3]}></img>
                    <div>{this.props.places[3]}</div>
                </div>
                <div className="naturePlace natureArrow" style={{transform:`translateX(${this.state.transform[4]})`,opacity:this.state.opacity*this.props.show[0]}} >
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                <div className="naturePlace natureArrow" style={{transform:`translateY(${this.state.transform[5]})`,opacity:this.state.opacity*this.props.show[1]}} >
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </div>
                <div className="naturePlace natureArrow" style={{transform:`translateX(${this.state.transform[6]})`,opacity:this.state.opacity*this.props.show[2]}}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
                <div className="naturePlace natureArrow" style={{transform:`translateY(${this.state.transform[7]})`,opacity:this.state.opacity*this.props.show[3]}}>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
            </div>    
        )
    }
};

export default NatureActivity;