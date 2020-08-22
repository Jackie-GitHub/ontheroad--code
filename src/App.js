import React from 'react';

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

class App extends React.Component {
  state={
    searchterm:'',
    videos:[],
    selectedVideo:null,
    search:false,
    sideBar:false,

    weatherBit:{
      icon:'',
      code:'',
      description:''
    },
    weatherBitTemperature:'',
    weatherBitError:''
  };

  onSearch =async(term,weatherCity) => {
    console.log('term:');
    console.log(term);
    console.log('weatherCity:');
    console.log(weatherCity);

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
      console.log('something is wrong from weatherbit.');
      weatherBitError = err;
    });    

    const response = await youtube.get('search',{
      params:{
        q:`${term} travel`
      }
    });
    const videosR = response.data.items;
        
    this.setState({search:true, sideBar:false,selectedVideo:videosR[0],videos:[...videosR],
      weatherBit:weatherBit,
      weatherBitTemperature:weatherBitTemperature,
      weatherBitError:weatherBitError});
  };

  offSearch = () => {
    this.setState({search:false});
  }

  onVideoSelect=(video) => {
    this.setState({selectedVideo:video});
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
        <Modal onSearch={this.state.search} onclick={this.offSearch} >
            <SearchResult videos={this.state.videos} selectedVideo={this.state.selectedVideo} onSelect={this.onVideoSelect} weather={this.state.weatherBit} weatherError={this.state.weatherBitError} weathertTemperature={this.state.weatherBitTemperature} imagesUnsplash = {this.state.imagesUnsplash} feedbackWord={this.onSearch} />
        </Modal>
        <Header feedbackWord={this.onSearch} onclickToTop={this.scrollPageTop} onclickToCenter={this.scrollPageCenter} sideBar={this.state.sideBar} showSideBar={()=>{this.setState({sideBar:true})}} hideSideBar={()=>{this.setState({sideBar:false})}}/>
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

export default App;