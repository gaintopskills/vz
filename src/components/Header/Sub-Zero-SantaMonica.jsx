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
        <h1 class="gold-embossed" data-text="SUB-ZERO">Sub-Zero Repair Santa Monica</h1>
        <img className="header-image" width="400" height="189" src="/sub-zero/sub-zero-repair-services-santa-monica.webp" alt="Sub-Zero Repair Services" fetchpriority="high"
  decoding="async"/>
        <p>
        Local Santa Monica factory-trained Sub-Zero repair technicians specializing in luxury appliance repair including Sub-Zero repair.</p>
        <p>✅ Lisenced & Insured<br />
        ✅ 3-month warranty on parts and labor<br />
        ✅ 1 year warranty on sealded system repair<br />
          ✅ Same-day or next day service<br />
        </p>
        <p>If your Sub-Zero fridge not cooling, freezer’s too warm, or wine cooler stops working, you can count on us to fix it.</p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
