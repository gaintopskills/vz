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
        <h1>Luxury Appliance Repair by ZARICCI</h1>
        <p>
          At Luxury Appliance Repair, we specialize in repairing high-end appliances with
          precision, ensuring your kitchen and home run seamlessly. With certified and highly expirienced 
          technicians, premium-quality parts, and exceptional customer care, we deliver
          reliable service tailored to your needs.
        </p>
        <p>
          We’re trusted by our customers to repair luxury and high-end
          brands like Viking, Wolf, Thermador, Gaggenau, Miele, Bosch, Jenn-Air,
          KitchenAid, Dacor, La Cornue, Smeg, Big Chill, Elmira Stove Works, BlueStar,
          Fisher & Paykel, AGA, and more.
        </p>
      </div>
    </div>
  );
};
export default ParallaxHeader;
