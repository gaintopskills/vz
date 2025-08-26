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
      title: "Dishwasher Repair",
      heading: "Cove Dishwasher Repair",
      img: "/cove/cove-dishwasher-repair.webp",
      alt: "Cove Dishwasher Repair",
      description: (
        <>
          <p><strong>Cove dishwashers</strong> are designed for luxury kitchens and quiet operation. If yours is leaving dishes dirty, leaking, or showing error codes, our technicians can help.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dishwasher won’t start</li>
            <li>✅ Leaking or pooling water</li>
            <li>✅ Error code displayed</li>
            <li>✅ Dishes not drying</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Diagnose and replace <strong>pumps, float switches, heating elements</strong></li>
            <li>✅ Resolve control board or touchscreen issues</li>
            <li>✅ Ensure all filters and seals are clean and intact</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Cove Maintenance",
      heading: "Cove Appliance Maintenance",
      /*img: "/cove/cove-maintenance.webp",*/
      alt: "Cove Dishwasher Maintenance",
      description: (
        <>
          <p>Keep your <strong>Cove dishwasher</strong> performing at its best with routine maintenance. Regular service helps avoid costly repairs and extends appliance life.</p>
          <h3>Included in Our Maintenance:</h3>
          <ul>
            <li>✅ Inspect and clean <strong>spray arms, filters, drain hoses</strong></li>
            <li>✅ Test and calibrate <strong>water intake and drain pump</strong></li>
            <li>✅ Check <strong>door seals, detergent dispenser, heating element</strong></li>
          </ul>
          <p>Our technicians follow factory-grade procedures to ensure every detail is addressed.</p>
        </>
      )
    },
    {
      id: "content3",
      title: "Cove Installation",
      heading: "Cove Dishwasher Installation",
      /*img: "/cove/cove-installation.webp",*/
      alt: "Cove Dishwasher Installation",
      description: (
        <>
          <p>We offer expert <strong>Cove dishwasher installation</strong> for new homes, remodels, or appliance upgrades. From delivery to final inspection, every detail is handled professionally.</p>
          <h3>We Ensure:</h3>
          <ul>
            <li>✅ Proper leveling, water line, and drain hose connections</li>
            <li>✅ Secure panel fit for integrated kitchen design</li>
            <li>✅ Full function test and satisfaction guarantee</li>
          </ul>
          <p>Enjoy flawless operation from day one with our Cove installation specialists.</p>
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
