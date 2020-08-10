import React from 'react';

const VideoList = (props) => {
    if (!props.videos) {
        return (
            <div>No Search Result</div>
        );
    };

    const searchResult = props.videos.map((video)=>{
        const src=video.snippet.thumbnails.medium.url;
        const alt=video.snippet.title
        return (
            <div key={video.id.videoId} >
                <img src={src} alt={alt} style={{width:'100%'}} />
                <p style={{fontSize:'70%'}} >{video.snippet.title }</p>
            </div>
        )
    });

    return (
        <div>
            {searchResult}
        </div>
    );
};

export default VideoList;