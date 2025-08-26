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
      title: "Refrigerator Repair",
      heading: "Fisher & Paykel Refrigerator Repair",
      img: "/fisher-paykel/fisher-paykel-refrigerator-repair.webp",
      alt: "Fisher & Paykel Refrigerator Repair",
      description: (
        <>
          <p>We service all <strong>Fisher & Paykel refrigerator models</strong>, including integrated columns and French door units. Whether you're dealing with <strong>cooling problems</strong>, <strong>ice maker issues</strong>, or <strong>seal failures</strong>, our expert techs restore optimal freshness and performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not cooling or inconsistent temps</li>
            <li>✅ Ice maker not working</li>
            <li>✅ Water dispenser leaking</li>
            <li>✅ Loud compressor or fan noises</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair or replace <strong>evaporators, fans, thermostats, and door seals</strong></li>
            <li>✅ Restore water filtration and dispenser functionality</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Dishwasher Repair",
      heading: "Fisher & Paykel Dishwasher Repair",
      // img: "/fisher-paykel/fisher-paykel-dishwasher-repair.webp",
      alt: "Fisher & Paykel Dishwasher Repair",
      description: (
        <>
          <p>Famous for their <strong>DishDrawer™ designs</strong>, Fisher & Paykel dishwashers require specialized service. We fix <strong>water drainage issues, cycle failures, and electronic faults</strong> with OEM precision.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Drawer not closing properly</li>
            <li>✅ Dishwasher leaking or not draining</li>
            <li>✅ No power or blinking lights</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>drain pumps, latches, control boards, and sensors</strong></li>
            <li>✅ Ensure seamless water flow and wash performance</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Oven Repair",
      heading: "Fisher & Paykel Oven Repair",
      // img: "/fisher-paykel/fisher-paykel-oven-repair.webp",
      alt: "Fisher & Paykel Oven Repair",
      description: (
        <>
          <p>We specialize in repairing <strong>Fisher & Paykel built-in ovens</strong>, including convection and self-cleaning models. Restore accurate temperature and reliable cooking with expert support.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven not heating evenly</li>
            <li>✅ Temperature too low or too high</li>
            <li>✅ Self-clean cycle not functioning</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>heating elements, sensors, and thermostats</strong></li>
            <li>✅ Update firmware or control board components</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Cooktop Repair",
      heading: "Fisher & Paykel Cooktop Repair",
      // img: "/fisher-paykel/fisher-paykel-cooktop-repair.webp",
      alt: "Fisher & Paykel Cooktop Repair",
      description: (
        <>
          <p>Our team services <strong>Fisher & Paykel gas and induction cooktops</strong>. We fix <strong>burner ignition, heating failures</strong>, and <strong>touch controls</strong> across all models.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not lighting</li>
            <li>✅ Induction zones unresponsive</li>
            <li>✅ Cracked or unlevel glass surface</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair <strong>igniters, capacitors, and power boards</strong></li>
            <li>✅ Level cooktop and replace damaged surfaces</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Washer Repair",
      heading: "Fisher & Paykel Washer Repair",
      // img: "/fisher-paykel/fisher-paykel-washer-repair.webp",
      alt: "Fisher & Paykel Washer Repair",
      description: (
        <>
          <p>We repair <strong>Fisher & Paykel top and front load washers</strong>. From <strong>SmartDrive™ motor issues</strong> to <strong>drain pump failures</strong>, we bring your laundry back to life.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Washer not draining or spinning</li>
            <li>✅ Excessive vibration or noise</li>
            <li>✅ Error codes or cycle not starting</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>drain pumps, belts, motor modules</strong></li>
            <li>✅ Reset firmware or reprogram controls</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Dryer Repair",
      heading: "Fisher & Paykel Dryer Repair",
      // img: "/fisher-paykel/fisher-paykel-dryer-repair.webp",
      alt: "Fisher & Paykel Dryer Repair",
      description: (
        <>
          <p>Keep your laundry smooth and dry with expert <strong>Fisher & Paykel dryer repair</strong>. We handle <strong>vented and condenser units</strong> with care and precision.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dryer won’t heat</li>
            <li>✅ Drum won’t spin</li>
            <li>✅ Dry cycles taking too long</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair <strong>heating elements, thermostats, and drive motors</strong></li>
            <li>✅ Clean internal lint and inspect airflow</li>
          </ul>
        </>
      )
    },
    {
      id: "content7",
      title: "Maintenance Services",
      heading: "Fisher & Paykel Maintenance Services",
      // img: "/fisher-paykel/fisher-paykel-maintenance.webp",
      alt: "Fisher & Paykel Maintenance Services",
      description: (
        <>
          <p>Prevent costly breakdowns with scheduled <strong>Fisher & Paykel maintenance</strong>. We tune, clean, and inspect each appliance for optimal performance and energy savings.</p>
          <h3>What’s Included:</h3>
          <ul>
            <li>✅ Clean condenser coils, filters, and vents</li>
            <li>✅ Test sensors, seals, and electrical connections</li>
            <li>✅ Calibrate temperatures and check firmware</li>
          </ul>
        </>
      )
    },
    {
      id: "content8",
      title: "Installation Services",
      heading: "Fisher & Paykel Appliance Installation",
      // img: "/fisher-paykel/fisher-paykel-installation.webp",
      alt: "Fisher & Paykel Appliance Installation",
      description: (
        <>
          <p>Trust us for professional <strong>Fisher & Paykel appliance installation</strong>. We install <strong>built-in refrigerators, DishDrawer™ dishwashers, washers, dryers</strong>, and more—seamlessly and securely.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Built-in column refrigerators</li>
            <li>✅ Ovens, cooktops, and dishwashers</li>
            <li>✅ Laundry pairs and ventilation hoods</li>
          </ul>
          <p>Every install includes <strong>function checks and manufacturer-compliant placement</strong>.</p>
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
