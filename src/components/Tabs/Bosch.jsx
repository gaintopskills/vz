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
      heading: "Bosch Range Repair",
      img: "/bosch/bosch-range-repair.webp",
      alt: "Bosch Range Repair",
      description: (
        <>
          <p>We provide expert <strong>Bosch range repair</strong> for both gas and electric models. Whether you're facing <strong>ignition failures</strong>, <strong>temperature issues</strong>, or <strong>control malfunctions</strong>, our technicians ensure precision fixes.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners won’t ignite</li>
            <li>✅ Oven not reaching temperature</li>
            <li>✅ Error codes on panel</li>
            <li>✅ Uneven cooking results</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We repair or replace <strong>igniters, thermostats, and control boards</strong>.</li>
            <li>✅ We test gas lines and recalibrate oven sensors.</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "Bosch Oven Repair",
      /*img: "/bosch/bosch-oven-repair.webp",*/
      alt: "Bosch Oven Repair",
      description: (
        <>
          <p>From <strong>built-in single ovens</strong> to <strong>double wall units</strong>, we handle all types of Bosch oven repairs, ensuring even heat distribution and reliable operation.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not heating or baking evenly</li>
            <li>✅ Controls unresponsive</li>
            <li>✅ Self-cleaning not working</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replacement of <strong>heating elements, control panels, and probes</strong>.</li>
            <li>✅ Firmware updates for smart ovens.</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "Bosch Cooktop Repair",
      /*img: "/bosch/bosch-cooktop-repair.webp",*/
      alt: "Bosch Cooktop Repair",
      description: (
        <>
          <p>We specialize in repairing <strong>Bosch induction, gas, and electric cooktops</strong>. Whether a burner won't light or an induction zone fails, we offer safe, efficient service.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not lighting or sparking</li>
            <li>✅ Induction zones not recognizing cookware</li>
            <li>✅ Touch controls not responding</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair or replace <strong>igniters, touch controls, power modules</strong>.</li>
            <li>✅ Testing and replacement of safety sensors.</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Refrigerator Repair",
      heading: "Bosch Refrigerator Repair",
      /*img: "/bosch/bosch-refrigerator-repair.webp",*/
      alt: "Bosch Refrigerator Repair",
      description: (
        <>
          <p>We fix <strong>Bosch French door, bottom freezer, and built-in refrigerators</strong>. Whether it’s a cooling issue or a faulty ice maker, we restore reliable performance fast.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not cooling or freezing</li>
            <li>✅ Ice maker not working</li>
            <li>✅ Water leaking inside</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We service <strong>compressors, evaporators, fans, control panels</strong>.</li>
            <li>✅ Water filter housing and dispenser components replaced as needed.</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Dishwasher Repair",
      heading: "Bosch Dishwasher Repair",
      /*img: "/bosch/bosch-dishwasher-repair.webp",*/
      alt: "Bosch Dishwasher Repair",
      description: (
        <>
          <p>Bosch dishwashers are known for their quiet and powerful cleaning. We resolve <strong>leaks, poor draining, or cycle errors</strong> to restore optimal wash performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dishwasher won’t start</li>
            <li>✅ Not drying dishes</li>
            <li>✅ Leaking water</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>drain pumps, heating elements, gaskets</strong>.</li>
            <li>✅ Calibrate water sensors and troubleshoot electronic controls.</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Washer Repair",
      heading: "Bosch Washer Repair",
      /*img: "/bosch/bosch-washer-repair.webp",*/
      alt: "Bosch Washer Repair",
      description: (
        <>
          <p>We repair all Bosch washers, from front-load to compact models. Whether it’s a drainage issue or excessive vibration, we keep your laundry cycle smooth and clean.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Washer not spinning or draining</li>
            <li>✅ Door won’t unlock</li>
            <li>✅ Strange noises or vibrations</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>door locks, drain pumps, shocks, sensors</strong>.</li>
          </ul>
        </>
      )
    },
    {
      id: "content7",
      title: "Dryer Repair",
      heading: "Bosch Dryer Repair",
      /*img: "/bosch/bosch-dryer-repair.webp",*/
      alt: "Bosch Dryer Repair",
      description: (
        <>
          <p>We repair <strong>Bosch ventless and condenser dryers</strong>. If your dryer isn’t heating or the cycle won’t complete, our team brings fast, in-home solutions.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dryer not heating</li>
            <li>✅ Long dry times</li>
            <li>✅ No power or won’t start</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We fix <strong>heating elements, thermostats, motors, belts</strong>.</li>
          </ul>
        </>
      )
    },
    {
      id: "content8",
      title: "Ventilation Repair",
      heading: "Bosch Hood Repair",
      /*img: "/bosch/bosch-hood-repair.webp",*/
      alt: "Bosch Hood Repair",
      description: (
        <>
          <p>Our team services <strong>Bosch chimney, island, and cabinet insert hoods</strong>. We restore airflow, lighting, and silent operation for a clean, elegant kitchen environment.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Hood not turning on</li>
            <li>✅ Loud noise or vibration</li>
            <li>✅ Lights not working</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>fan motors, lights, touch panels, and filters</strong>.</li>
          </ul>
        </>
      )
    },
    {
      id: "content9",
      title: "Bosch Maintenance",
      heading: "Bosch Appliance Maintenance",
      /*img: "/bosch/bosch-maintenance.webp",*/
      alt: "Bosch Appliance Maintenance",
      description: (
        <>
          <p>Protect your Bosch appliances with regular maintenance. Our preventive service ensures optimal performance, efficiency, and longevity for all models.</p>
          <h3>Included in Maintenance:</h3>
          <ul>
            <li>✅ Deep cleaning and descaling</li>
            <li>✅ Testing sensors, motors, and heating elements</li>
            <li>✅ Inspecting seals, filters, and hoses</li>
          </ul>
        </>
      )
    },
    {
      id: "content10",
      title: "Bosch Installation",
      heading: "Bosch Appliance Installation",
      /*img: "/bosch/bosch-installation.webp",*/
      alt: "Bosch Appliance Installation",
      description: (
        <>
          <p>We provide white-glove <strong>Bosch appliance installation</strong> for new kitchens and replacements. From <strong>refrigerators</strong> to <strong>dishwashers and cooktops</strong>, we ensure secure and seamless setup.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Bosch ovens, ranges, cooktops</li>
            <li>✅ Refrigerators and dishwashers</li>
            <li>✅ Washers, dryers, and ventilation hoods</li>
          </ul>
          <p>Every install is followed by a <strong>function check</strong> and a <strong>satisfaction guarantee</strong>.</p>
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
