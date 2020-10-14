import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component{
    state={
        term:'',
        weatherCity:''
    };
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term,this.state.weatherCity);
        this.setState({term:'',weatherCity:''});
    }

    render (){
        return(
            <form onSubmit={this.onFormSubmit} className="searchbar-form">
                <input className="searchbar-input" type="search" placeholder="search" value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value,weatherCity:e.target.value})}} />
                <button className="searchbar-btn" type="submit"><ion-icon name="search-outline"></ion-icon></button>
            </form>
        );        
    }
};

export default SearchBar;