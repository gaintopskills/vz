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
          src="/bg.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        Your browser does not support the video tag.
      </video>
      <div className="maintext">
        <h1 class="gold-embossed" data-text="Wolf">Wolf Appliance Repair</h1>
        <img className="header-image" width="1200" height="630" src="/wolf/wolf-appliance-repair-services.webp" alt="Wolf Applaince Repair Services"  fetchpriority="high"
  decoding="async"/>
        <p>
        Local, factory-trained Wolf repair technicians specializing in luxury appliance repair including Wolf appliances.</p>
        <p>✅ Lisenced & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ 1 year warranty on sealded system repair<br />
          ✅ Same-day or next day service<br />
        </p>
        <p>If your Wolf range won’t ignite, oven isn’t heating evenly, or cooktop controls stop responding, you can count on us to fix it.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
