import React from 'react';
import './Video.css';

const Video = ({ event }) => {
  // Extract the video ID from the URL
  const videoId = event.event_video && event.event_video.includes('v=') 
    ? event.event_video.split('v=')[1] 
    : null;
  
  // Create the embed URL if videoId is available
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className='youtube'>
      <h5>{event.event_name}</h5>
      {embedUrl ? (
        <div className='y-video'>
          <iframe 
            src={embedUrl}
            title={event.event_name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>No video available</p>
      )}
    </div>
  );
};

export default Video;