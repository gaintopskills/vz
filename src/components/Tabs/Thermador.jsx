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
      heading: "Thermador Range Repair",
      img: "/thermador/thermador-range-repair.webp",
      alt: "Thermador Range Repair",
      description: (
        <>
          <p>We repair all <strong>Thermador range models</strong>, including dual-fuel, gas, and induction styles. From <strong>ignition problems</strong> to <strong>temperature fluctuations</strong>, we restore elite cooking performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not igniting</li>
            <li>✅ Oven won’t heat evenly</li>
            <li>✅ Error codes on display</li>
            <li>✅ Convection issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>igniters, sensors, thermostats, and boards</strong>.</li>
            <li>✅ Precision diagnostics for dual-fuel and smart models.</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "Thermador Oven Repair",
      /*img: "/thermador/thermador-oven-repair.webp",*/
      alt: "Thermador Oven Repair",
      description: (
        <>
          <p>We handle <strong>Thermador wall ovens</strong>, steam ovens, and speed ovens. Our experts resolve <strong>preheat delays, steam malfunctions</strong>, and <strong>touch panel failures</strong>.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven won’t heat</li>
            <li>✅ Inaccurate temps</li>
            <li>✅ Steam cycle not working</li>
            <li>✅ Touchscreen frozen</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We calibrate and replace <strong>temperature probes and control boards</strong>.</li>
            <li>✅ Firmware updates and touchscreen replacements when needed.</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "Thermador Cooktop Repair",
      /*img: "/thermador/thermador-cooktop-repair.webp",*/
      alt: "Thermador Cooktop Repair",
      description: (
        <>
          <p>From <strong>Masterpiece® induction cooktops</strong> to gas models, we offer full-service <strong>Thermador cooktop repair</strong> for flawless heat control and safety.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Induction zones not responding</li>
            <li>✅ Gas burners clicking or weak flame</li>
            <li>✅ Cooktop won’t turn on</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We service <strong>burner valves, touch controls, power supplies</strong>.</li>
            <li>✅ Safety sensors and relays tested and replaced when needed.</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Refrigerator Repair",
      heading: "Thermador Refrigerator Repair",
     /* img: "/thermador/thermador-refrigerator-repair.webp",*/
      alt: "Thermador Refrigerator Repair",
      description: (
        <>
          <p>We repair <strong>Thermador built-in and Freedom® refrigerators</strong>. From <strong>cooling failures</strong> to <strong>ice maker issues</strong>, we restore optimal performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not cooling properly</li>
            <li>✅ Ice buildup or water leaks</li>
            <li>✅ Dispenser not working</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We repair <strong>compressors, evaporators, fans, ice makers</strong>.</li>
            <li>✅ Door seal and control board issues resolved quickly.</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Dishwasher Repair",
      heading: "Thermador Dishwasher Repair",
     /* img: "/thermador/thermador-dishwasher-repair.webp",*/
      alt: "Thermador Dishwasher Repair",
      description: (
        <>
          <p>Thermador dishwashers are known for quiet cycles and crystal-clear results. If yours has <strong>leaks, poor cleaning, or startup issues</strong>, we can help.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dishwasher won’t start</li>
            <li>✅ Water pooling or not draining</li>
            <li>✅ Dishes not drying</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>pumps, valves, gaskets, and heating elements</strong>.</li>
            <li>✅ Cycle issues resolved with control board servicing.</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Washer Repair",
      heading: "Thermador Washer Repair",
     /* img: "/thermador/thermador-washer-repair.webp",*/
      alt: "Thermador Washer Repair",
      description: (
        <>
          <p>Although rare, select Thermador laundry models may require expert <strong>washer repair</strong>. We handle <strong>drainage, vibration, and motor issues</strong> efficiently.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Won’t start or drain</li>
            <li>✅ Leaking or vibrating</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Drain pumps, bearings, and sensors tested and replaced as needed.</li>
          </ul>
        </>
      )
    },
    {
      id: "content7",
      title: "Dryer Repair",
      heading: "Thermador Dryer Repair",
      /*img: "/thermador/thermador-dryer-repair.webp",*/
      alt: "Thermador Dryer Repair",
      description: (
        <>
          <p>For Thermador-branded or co-manufactured dryers, we offer full <strong>drying and heating system repair</strong>. Long dry times and no heat are quickly resolved.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ No heat</li>
            <li>✅ Drum won’t spin</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Thermostats, fuses, motors, and rollers are tested and replaced.</li>
          </ul>
        </>
      )
    },
    {
      id: "content8",
      title: "Ventilation Repair",
      heading: "Thermador Hood Repair",
     /* img: "/thermador/thermador-hood-repair.webp",*/
      alt: "Thermador Hood Repair",
      description: (
        <>
          <p>We provide <strong>Thermador ventilation repair</strong> for chimney, island, and custom insert hoods. Eliminate smoke and restore silent airflow.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Loud or weak fan</li>
            <li>✅ Lights not working</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Fan motors, switches, and lights repaired or replaced.</li>
          </ul>
        </>
      )
    },
    {
      id: "content9",
      title: "Thermador Maintenance",
      heading: "Thermador Appliance Maintenance",
     /* img: "/thermador/thermador-maintenance.webp",*/
      alt: "Thermador Maintenance",
      description: (
        <>
          <p>Protect your investment with <strong>Thermador appliance maintenance</strong>. Our service maximizes performance, safety, and efficiency.</p>
          <h3>Included in Our Maintenance:</h3>
          <ul>
            <li>✅ Clean and inspect burners, seals, fans, and motors</li>
            <li>✅ Flush lines, descale elements, test electronics</li>
          </ul>
        </>
      )
    },
    {
      id: "content10",
      title: "Thermador Installation",
      heading: "Thermador Appliance Installation",
     /* img: "/thermador/thermador-installation.webp",*/
      alt: "Thermador Installation",
      description: (
        <>
          <p>We offer full-service <strong>Thermador appliance installation</strong>, ensuring perfect placement, leveling, and connection for any product line.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Ranges, ovens, cooktops</li>
            <li>✅ Refrigerators and freezers</li>
            <li>✅ Dishwashers, hoods, and laundry</li>
          </ul>
          <p>Every install is backed by <strong>function checks and satisfaction guarantee</strong>.</p>
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
