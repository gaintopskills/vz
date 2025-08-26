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
      heading: "Dacor Range Repair",
      img: "/dacor/dacor-range-repair.webp",
      alt: "Dacor Range Repair",
      description: (
        <>
          <p>Our technicians are experts in <strong>Dacor range repair</strong>, from Heritage and Modernist series to induction and dual-fuel models. We resolve everything from <strong>ignition failure</strong> to <strong>smart display issues</strong>.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not lighting</li>
            <li>✅ Oven not heating evenly</li>
            <li>✅ Control panel not responding</li>
            <li>✅ Gas odor or leaks</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>igniters, flame sensors, thermostats, and control boards</strong></li>
            <li>✅ Smart diagnostics for Wi-Fi-enabled models</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "Dacor Oven Repair",
      /*img: "/dacor/dacor-oven-repair.webp",*/
      alt: "Dacor Oven Repair",
      description: (
        <>
          <p>We repair all <strong>Dacor ovens</strong>, including steam, wall, and convection models. Our services restore precision baking and smart feature performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven won’t preheat</li>
            <li>✅ Uneven baking</li>
            <li>✅ Steam oven not generating steam</li>
            <li>✅ Touchscreen frozen</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair <strong>heating elements, fans, thermostats, and display panels</strong></li>
            <li>✅ Reprogram or update smart interfaces</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "Dacor Cooktop Repair",
      /*img: "/dacor/dacor-cooktop-repair.webp",*/
      alt: "Dacor Cooktop Repair",
      description: (
        <>
          <p>From gas to induction, we service all <strong>Dacor cooktops</strong>. If your appliance shows <strong>power issues, flame irregularities, or error codes</strong>, we’ll resolve it quickly.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Cooktop won’t turn on</li>
            <li>✅ Clicking sounds or low flame</li>
            <li>✅ Induction not recognizing pans</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair <strong>power boards, sensors, valves, and ignition modules</strong></li>
            <li>✅ Clean or recalibrate burner assemblies</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Refrigerator Repair",
      heading: "Dacor Refrigerator Repair",
      /*img: "/dacor/dacor-refrigerator-repair.webp",*/
      alt: "Dacor Refrigerator Repair",
      description: (
        <>
          <p>We repair <strong>Dacor column and French door refrigerators</strong>, restoring optimal temperature and integrated performance for your kitchen suite.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not cooling or freezing</li>
            <li>✅ Ice maker not working</li>
            <li>✅ Excess noise or leaks</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>compressors, evaporators, fans, and seals</strong></li>
            <li>✅ Fix smart display and internal lighting issues</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Dishwasher Repair",
      heading: "Dacor Dishwasher Repair",
      /*img: "/dacor/dacor-dishwasher-repair.webp",*/
      alt: "Dacor Dishwasher Repair",
      description: (
        <>
          <p>Our <strong>Dacor dishwasher repair</strong> service addresses common performance issues like <strong>poor draining, drying, and touchscreen errors</strong>.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dishwasher won’t start</li>
            <li>✅ Not draining or drying dishes</li>
            <li>✅ Error messages</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair <strong>motors, pumps, heating coils, and control panels</strong></li>
            <li>✅ Update software and recalibrate cycles</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Wine Cooler Repair",
      heading: "Dacor Wine Cooler Repair",
      /*img: "/dacor/dacor-wine-cooler-repair.webp",*/
      alt: "Dacor Wine Cooler Repair",
      description: (
        <>
          <p>Protect your collection with our expert <strong>Dacor wine cooler repair</strong>. We fix <strong>temperature inconsistencies</strong>, <strong>fan failures</strong>, and more.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not cooling to set temperature</li>
            <li>✅ Loud fan or compressor noise</li>
            <li>✅ Door seal issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>thermostats, fans, compressors, and door gaskets</strong></li>
          </ul>
        </>
      )
    },
    {
      id: "content7",
      title: "Hood Repair",
      heading: "Dacor Hood Repair",
      /*img: "/dacor/dacor-hood-repair.webp",*/
      alt: "Dacor Hood Repair",
      description: (
        <>
          <p>We repair <strong>Dacor ventilation hoods</strong> to eliminate smoke, odor, and fan noise issues in both chimney and island styles.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Fan not turning on</li>
            <li>✅ Lights not working</li>
            <li>✅ Loud or rattling sounds</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>motors, switches, filters, and lights</strong></li>
          </ul>
        </>
      )
    },
    {
      id: "content8",
      title: "Dacor Maintenance",
      heading: "Dacor Appliance Maintenance",
      /*img: "/dacor/dacor-maintenance.webp",*/
      alt: "Dacor Appliance Maintenance",
      description: (
        <>
          <p>Our scheduled <strong>Dacor maintenance service</strong> ensures your appliances operate at peak performance and efficiency.</p>
          <h3>What’s Included:</h3>
          <ul>
            <li>✅ Clean burners, filters, sensors, and vents</li>
            <li>✅ Inspect and calibrate thermostats and fans</li>
            <li>✅ Smart system checks and firmware updates</li>
          </ul>
        </>
      )
    },
    {
      id: "content9",
      title: "Dacor Installation",
      heading: "Dacor Appliance Installation",
      /*img: "/dacor/dacor-installation.webp",*/
      alt: "Dacor Appliance Installation",
      description: (
        <>
          <p>We provide white-glove <strong>Dacor appliance installation</strong> for all kitchen and cooling products. Enjoy flawless setup and performance from day one.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Ranges, ovens, cooktops</li>
            <li>✅ Refrigerators and wine coolers</li>
            <li>✅ Dishwashers and hoods</li>
          </ul>
          <p>Backed by full function testing and satisfaction guarantee.</p>
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
