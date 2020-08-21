import React from 'react';
import './SearchResult.scss';
import SearchResultWeather from './SearchResultWeather';
import SearchBar from './SearchBar';

class SearchResult extends React.Component{
    state={term:'',weatherCity:''};

    onSearchSubmit= async (term,weatherCity)=>{
        await this.setState({term:term,weatherCity:weatherCity});
        this.props.feedbackWord(this.state.term,this.state.weatherCity);
    };    
    
    render (){  
        if (!this.props.videos) {
            return (
                <div>No Search Result</div>
            );
        };
        
        if (!this.props.selectedVideo) {
            return (
                <div className="noVideoResult">
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                    <div>Please enter a valid place name.</div>               
                </div>
            )
        };
            
        const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
    
        const searchResult = this.props.videos.map((video)=>{
            const src=video.snippet.thumbnails.medium.url;
            const alt=video.snippet.title
            return (
                <div key={video.id.videoId} onClick={()=>{this.props.onSelect(video)}} >
                    <img src={src} alt={alt} style={{width:'100%'}} />
                    <p style={{fontSize:'70%'}} >{video.snippet.title }</p>
                </div>
            )
        });  
        return (
            <>
            <div className="row">
                <div className="col-12 col-sm-9">
                    <div className = "SearchResultTop">
                        <div className = "SearchResultWeather">
                            <SearchResultWeather weather={this.props.weather} weatherError={this.props.weatherError} weathertTemperature={this.props.weathertTemperature} />
                        </div>
                        <div className = "SearchResultBar">
                            <SearchBar onSubmittt={this.onSearchSubmit}/>
                        </div>
                    </div>
                    <div className="s-video">
                        <iframe title="video player" src={videoSrc} />
                    </div>
                    <div className="s-videoText">
                        <h4 className="s-videoTitle">{this.props.selectedVideo.snippet.title}</h4>
                        <p>{this.props.selectedVideo.snippet.description}</p>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    {searchResult}
                </div>
            </div>
            </>
        );
    }
};

export default SearchResult;
