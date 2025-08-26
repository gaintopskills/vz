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
      title: "Range Repair",
      heading: "JennAir Range Repair",
      img: "/jennair/jennair-range-repair.webp",
      alt: "JennAir Range Repair",
      description: (
        <>
          <p>We service all <strong>JennAir ranges</strong>, including dual-fuel, slide-in, and professional-style models. Whether you're dealing with <strong>ignition failure</strong> or <strong>temperature fluctuations</strong>, our technicians restore performance with precision.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not igniting</li>
            <li>✅ Oven won’t heat evenly</li>
            <li>✅ Touchscreen not responsive</li>
            <li>✅ Error codes</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>igniters, spark modules, thermostats, and control boards</strong></li>
            <li>✅ Perform software resets and firmware updates</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "JennAir Oven Repair",
      /*img: "/jennair/jennair-oven-repair.webp",*/
      alt: "JennAir Oven Repair",
      description: (
        <>
          <p>From sleek <strong>Noir wall ovens</strong> to smart models with V2™ vertical dual-fan convection, we provide expert <strong>JennAir oven repair</strong> for all configurations.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven won’t preheat</li>
            <li>✅ Temperature too low or high</li>
            <li>✅ Touch controls frozen</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>control boards, fans, sensors, and thermostats</strong></li>
            <li>✅ Update firmware and recalibrate settings</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "JennAir Cooktop Repair",
      /*img: "/jennair/jennair-cooktop-repair.webp",*/
      alt: "JennAir Cooktop Repair",
      description: (
        <>
          <p>We repair <strong>JennAir gas, electric, and induction cooktops</strong>. Our technicians restore smooth heat control and precision functionality.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Induction zones not working</li>
            <li>✅ Clicking burners or low flame</li>
            <li>✅ No power to cooktop</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Service <strong>burner switches, igniters, power modules, and sensors</strong></li>
            <li>✅ Diagnose touch panel and safety lock issues</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Refrigerator Repair",
      heading: "JennAir Refrigerator Repair",
      /*img: "/jennair/jennair-refrigerator-repair.webp",*/
      alt: "JennAir Refrigerator Repair",
      description: (
        <>
          <p>We handle <strong>JennAir built-in and panel-ready refrigerators</strong>, including custom column models. From <strong>cooling failures</strong> to <strong>ice maker breakdowns</strong>, we fix it all.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not cooling or freezing</li>
            <li>✅ Ice maker leaking or jammed</li>
            <li>✅ Noisy operation</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair <strong>compressors, fans, control boards, and sensors</strong></li>
            <li>✅ Replace water valves, filters, and seals</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Dishwasher Repair",
      heading: "JennAir Dishwasher Repair",
      /*img: "/jennair/jennair-dishwasher-repair.webp",*/
      alt: "JennAir Dishwasher Repair",
      description: (
        <>
          <p>JennAir dishwashers combine power and luxury. We fix <strong>leaks, drying issues, and drain failures</strong> with OEM precision.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Won’t start or drain</li>
            <li>✅ Dishes not drying</li>
            <li>✅ Error codes or flashing lights</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair <strong>control boards, heating elements, pumps, and latches</strong></li>
            <li>✅ Reset software and clean internal components</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "JennAir Maintenance",
      heading: "JennAir Appliance Maintenance",
      /*img: "/jennair/jennair-maintenance.webp",*/
      alt: "JennAir Appliance Maintenance",
      description: (
        <>
          <p>Protect your investment with scheduled <strong>JennAir appliance maintenance</strong>. Our routine service extends lifespan and enhances performance.</p>
          <h3>Included Services:</h3>
          <ul>
            <li>✅ Clean burners, filters, fans, vents, and seals</li>
            <li>✅ Test sensors, probes, and thermostats</li>
            <li>✅ Run diagnostic cycles and update firmware</li>
          </ul>
        </>
      )
    },
    {
      id: "content7",
      title: "JennAir Installation",
      heading: "JennAir Appliance Installation",
      /*img: "/jennair/jennair-installation.webp",*/
      alt: "JennAir Installation",
      description: (
        <>
          <p>Our experts provide seamless <strong>JennAir appliance installation</strong> across the entire product line, including built-in ranges, refrigerators, ovens, and cooktops.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Ranges, wall ovens, and cooktops</li>
            <li>✅ Refrigerators and wine columns</li>
            <li>✅ Dishwashers, hoods, and accessories</li>
          </ul>
          <p>Each install is tested for performance and backed by our satisfaction guarantee.</p>
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
