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
        <h1 class="gold-embossed" data-text="Miele">Miele Repair</h1>
        <img className="header-image" width="1200" height="630" src="/miele/miele-appliance-repair-services.webp" alt="Miele Repair Services"  fetchpriority="high"
  decoding="async"/>
        <p>
        Local, factory-trained Miele repair technicians specializing in luxury appliance repair including Miele appliances.</p>
        <p>✅ Lisenced & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ 1 year warranty on sealded system repair<br />
          ✅ Same-day or next day service<br />
        </p>
        <p>If your Miele fridge not cooling, freezer’s too warm, or wine cooler stops working, you can count on us to fix it.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
