// ParallaxHeader.jsx
import React from 'react';

const ParallaxHeader = () => {
  return (
    <div className="video-container">
      <video
        id="bgVideo"
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/vega-zarici-traveling-rings1.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        Your browser does not support the video tag.
      </video>

      <div className="maintext">
        <h1>I’m Vega Zaricci, and my mission is simple: to prove the fountain of youth is within us — and to find ways to activate it.</h1>
        
      </div>
    </div>
  );
};
export default ParallaxHeader;
