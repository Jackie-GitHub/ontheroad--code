import React from 'react';
import {connect} from 'react-redux';

import Modal from './components/Modal';
import SearchResult from './components/SearchResult';

import Header from './components/header/Header';
import MainPage from './components/MainPage';
import MainDescription from './components/MainDescription';
import BigCities from './components/bigcities/BigCities';
import BigCitiesText from './components/bigcities/BigCitiesText';
import SmallTowns from './components/smallTowns/SmallTowns';
import SmallTownText from './components/smallTowns/SmallTownText';
import Nature from './components/nature/Nature';
import NatureText from './components/nature/NatureText';
import SubmitForm from './components/SubmitForm';
import Footer from './components/Footer';

import youtube from './axios/youtube';
import weatherbit from './axios/weatherbit';

import './App.scss';

import * as actionTypes from './store/actions/actionTypes';

class App extends React.Component {

  onSearch =async(term,weatherCity) => {
    let weatherBit = {};
    let weatherBitTemperature = '';
    let weatherBitError = '';

    await weatherbit.get('weather?',{
      params:{
        city:weatherCity
      }
    }).then((response)=>{
      weatherBit = response.data.data[0].weather;
      weatherBitTemperature = response.data.data[0].temp;

    }).catch((err)=>{
      console.log("No weather infomation");
      weatherBitError = err;
    });    

    const response = await youtube.get('search',{
      params:{
        q:`${term} travel`
      }
    });
    const videosR = response.data.items;
    const videos = [...videosR];
    const selectedVideo = videosR[0];
    
    this.props.hideSideBar();
    this.props.showSearch(videos,selectedVideo,weatherBit,weatherBitTemperature,weatherBitError);
  };

  scrollPageTop = (idName) => {
    var element = document.getElementById(idName);
    var headerOffset = 120;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
         top: offsetPosition,
         behavior: "smooth"
    });
  };

  scrollPageCenter = (refName) => {
    this.refs[refName].scrollIntoView({behavior: "smooth", block: "center"});
 };

  render(){
     
    return(
      <div className="App">
        <Modal onSearch={this.props.search} onclick={this.props.hideSearch} >
            <SearchResult videos={this.props.videos} selectedVideo={this.props.selectedVideo} onSelect={this.props.onVideoSelect} weather={this.props.weatherBit} weatherError={this.props.weatherBitError} weathertTemperature={this.props.weatherBitTemperature}searchTerm={this.onSearch} />
        </Modal>
        <Header searchTerm={this.onSearch} onclickToTop={this.scrollPageTop} onclickToCenter={this.scrollPageCenter} sideBar={this.props.sideBar} showSideBar={this.props.showSideBar} hideSideBar={this.props.hideSideBar} />
        <MainPage onclickToTop={this.scrollPageTop} />
        <div ref="mainDescription" id="mainDescription">
          <MainDescription />
        </div>        
        <section ref="bigCities" id="bigCities">
          <BigCities searchTerm={this.onSearch} />
          <BigCitiesText searchTerm={this.onSearch} />
        </section>
        <section ref="smallTowns" id="smallTowns">
          <SmallTowns searchTerm={this.onSearch} />
          <SmallTownText searchTerm={this.onSearch}/>
        </section>
        <section ref="nature" id="nature">
          <Nature searchTerm={this.onSearch} />
          <NatureText searchTerm={this.onSearch}/>
        </section>
        <section ref="submitForm" id="submitForm">
          <SubmitForm />
        </section>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      sideBar:state.sideBar.sideBar,

      search:state.search.search,
      videos:state.search.videos,
      selectedVideo:state.search.selectedVideo,

      weatherBit:state.search.weatherBit,
      weatherBitTemperature:state.search.weatherBitTemperature,
      weatherBitError:state.search.weatherBitError
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      showSideBar: () => dispatch({type: actionTypes.SHOWSIDEBAR}),
      hideSideBar: () => dispatch({type: actionTypes.HIDESIDEBAR}),
      hideSearch: ()=> dispatch({type:actionTypes.HIDESEARCH}),
      showSearch: (videos,selectedVideo,weatherBit,weatherBitTemperature,weatherBitError) => dispatch({
        type: actionTypes.SHOWSEARCH,
        videos:videos,
        selectedVideo:selectedVideo,
        weatherBit:weatherBit,
        weatherBitTemperature:weatherBitTemperature,
        weatherBitError:weatherBitError
      }),
      onVideoSelect: (video) => dispatch({type:actionTypes.ONVIDEOSELECT,video:video})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);