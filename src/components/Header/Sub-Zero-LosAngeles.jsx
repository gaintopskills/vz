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
        <h1 className="gold-embossed" data-text="SUB-ZERO">Sub-Zero Repair Los Angeles</h1>
        <img
          className="header-image"
          width="519"
          height="272"
          src="/sub-zero/sub-zero-repair-los-angeles-519x272.webp"
          alt="Sub-Zero Repair Services Los Angeles"
          fetchpriority="high"
  decoding="async"
        />
        <p>
          Serving Los Angeles with <strong>factory-trained Sub-Zero repair experts</strong> for luxury appliance service across LA.
        </p>
        <p>
          ✅ Licensed & Insured<br />
          ✅ 3-month parts & labor warranty<br />
          ✅ 1-year warranty on sealed system repairs<br />
          ✅ Same-day or next-day appointments
        </p>
        <p>
          Whether your Sub-Zero isn’t cooling, your freezer is too warm, or your wine cooler is down, we deliver the expert service Los Angeles homeowners expect.
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;
