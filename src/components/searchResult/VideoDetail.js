import React from 'react';

const VideoDetail = (props) => {    
    if (!props.selectedVideo) {
        return (
            <div>No video.</div>
        )
    };
        
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

    return (
        <div >
            <div className="">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="">
                <h4 className="">{props.selectedVideo.snippet.title}</h4>
                <p>{props.selectedVideo.snippet.description}</p>
            </div>
        </div>            
    );
};

export default VideoDetail;