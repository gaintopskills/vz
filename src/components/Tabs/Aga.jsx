// Rewritten version of the Tabs component for Wolf appliances
// Includes all major Wolf appliances and optimized for luxury/high-end appliance repair SEO

import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
      id: "content1",
      title: "AGA Range Repair",
      heading: "AGA Range Repair",
      img: "/aga/aga-range-repair.webp",
      alt: "AGA Range Repair",
      description: (
        <>
          <p>We specialize in <strong>AGA range repair</strong> for classic cast-iron and modern models. Whether your unit runs on gas, electric, or dual fuel, we bring expert knowledge and OEM-grade parts to restore full performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven not heating evenly</li>
            <li>✅ Hotplates or burners not turning on</li>
            <li>✅ Temperature control issues</li>
            <li>✅ Indicator light or control panel failure</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We service <strong>thermostats, heating elements, timers, and control boards</strong></li>
            <li>✅ Gas flow and ignition systems are inspected and adjusted</li>
            <li>✅ Cast-iron models get specialized treatment to protect longevity</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "AGA Oven Repair",
      heading: "AGA Oven Repair",
      /*img: "/aga/aga-oven-repair.webp",*/
      alt: "AGA Oven Repair",
      description: (
        <>
          <p>From traditional AGA cookers to newer electric ovens, we fix <strong>AGA oven problems</strong> with care and precision. We understand the importance of maintaining radiant heat cooking in your kitchen.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven not maintaining temperature</li>
            <li>✅ Heat-up time too long</li>
            <li>✅ Internal fan or sensor issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We calibrate thermostats and replace <strong>elements, fuses, and wiring</strong></li>
            <li>✅ Airflow systems and thermal sensors are tested for accuracy</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "AGA Cooktop Repair",
      heading: "AGA Cooktop Repair",
      /*img: "/aga/aga-cooktop-repair.webp",*/
      alt: "AGA Cooktop Repair",
      description: (
        <>
          <p>Our <strong>AGA cooktop repair</strong> service covers both integrated and modular cooktop units. We fix gas, electric, and induction AGA models with an eye for detail and historic brand quality.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Gas burner won’t ignite</li>
            <li>✅ Induction zones not responsive</li>
            <li>✅ Ceramic top cracked or not heating</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>burner valves, igniters, coils, and touch sensors</strong></li>
            <li>✅ Electrical and fuel systems are safety-checked before every handoff</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "AGA Hood Repair",
      heading: "AGA Ventilation Hood Repair",
      /*img: "/aga/aga-hood-repair.webp",*/
      alt: "AGA Hood Repair",
      description: (
        <>
          <p>We offer expert repair for <strong>AGA kitchen ventilation hoods</strong>. Whether chimney-style or integrated with your range, we fix fan speed problems, lighting issues, and excessive noise.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Fan not turning on or too loud</li>
            <li>✅ Lights flickering or burnt out</li>
            <li>✅ Controls not responding</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Fan motors, capacitors, and switches are tested and replaced</li>
            <li>✅ Lighting circuits and filters serviced for safety and efficiency</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "AGA Appliance Maintenance",
      heading: "AGA Maintenance Services",
      /*img: "/aga/aga-maintenance-services.webp",*/
      alt: "AGA Appliance Maintenance",
      description: (
        <>
          <p>Maintain the timeless performance of your appliances with our <strong>AGA maintenance services</strong>. Prevent costly repairs and ensure long-term heat retention and performance.</p>
          <h3>Included in Our Maintenance:</h3>
          <ul>
            <li>✅ Cleaning of burners, flues, and cooktops</li>
            <li>✅ Calibration of thermostats and sensors</li>
            <li>✅ Electrical checks and safety testing</li>
            <li>✅ Inspection of insulation and seals</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "AGA Appliance Installation",
      heading: "AGA Installation Services",
      /*img: "/aga/aga-installation-services.webp",*/
      alt: "AGA Appliance Installation",
      description: (
        <>
          <p>Get professional <strong>AGA appliance installation</strong> for your range, cooktop, or hood. We ensure proper handling, ventilation alignment, and safety-certified connections.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Classic cast-iron AGA ranges</li>
            <li>✅ AGA electric and induction cookers</li>
            <li>✅ AGA extractor hoods</li>
          </ul>
          <p>Every install includes leveling, fuel setup, and functional testing to meet factory specs.</p>
        </>
      )
    }
  ];  
  

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setActiveTab(mobile ? null : "content1");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && activeTab) {
      const index = items.findIndex((item) => item.id === activeTab);
      if (itemRefs.current[index]) {
        const topOffset = 150;
        const elementTop = itemRefs.current[index].getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop - topOffset, behavior: "smooth" });
      }
    }
  }, [activeTab, isMobile]);

  return (
    <div className="tabs-container" ref={containerRef}>
      {!isMobile ? (
        <div className="tabs-layout">
          <div className="tabs-sidebar">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`tabs-title ${activeTab === item.id ? "active" : ""}`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content">
            {items.map((item) => (
              <div key={item.id} className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
                <h2>{item.heading}</h2>
                <div className="tab-body-float">
                  {item.img && <img width="360" height="360" src={item.img} alt={item.title} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
                </div>
                <a href="/book/"><button className="tabs-button">Book</button></a>
                <a href="tel:4244997788"><button className="tabs-button">Call: (424) 499-7788</button></a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item, index) => (
            <div key={item.id} className="accordion-item" ref={(el) => (itemRefs.current[index] = el)}>
              <div onClick={() => setActiveTab((prev) => (prev === item.id ? null : item.id))} className="accordion-header">
                {item.title}
                <span className="accordion-icon">{activeTab === item.id ? "−" : "+"}</span>
              </div>
              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>{item.heading}</h2>
                  {item.img && <img src={item.img} alt={item.title} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
                  <a href="/book/"><button className="tabs-button">Book</button></a>
                  <a href="tel:4244997788"><button className="tabs-button">Call: (424) 499-7788</button></a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;