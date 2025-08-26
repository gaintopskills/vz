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
      heading: "KitchenAid Range Repair",
      img: "/kitchenaid/kitchenaid-range-repair.webp",
      alt: "KitchenAid Range Repair",
      description: (
        <>
          <p>We service all <strong>KitchenAid range models</strong>, including gas, electric, and dual-fuel options. From <strong>ignition failures</strong> to <strong>inconsistent oven temperatures</strong>, we bring your range back to life.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners won’t ignite</li>
            <li>✅ Oven not heating evenly</li>
            <li>✅ Range error codes</li>
            <li>✅ Control panel issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>igniters, thermostats, burner valves, and control boards</strong>.</li>
            <li>✅ Calibration and diagnostics on dual-fuel and smart models.</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "KitchenAid Oven Repair",
      // img: "/kitchenaid/kitchenaid-oven-repair.webp",
      alt: "KitchenAid Oven Repair",
      description: (
        <>
          <p>Our experts fix <strong>KitchenAid wall ovens</strong>, convection ovens, and combination units. We address <strong>preheat delays, sensor issues, and control failures</strong> with precision.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven won’t heat</li>
            <li>✅ Temperature not accurate</li>
            <li>✅ Touch panel unresponsive</li>
            <li>✅ Fan won’t turn on</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>thermistors, fan motors, and control panels</strong>.</li>
            <li>✅ Safety testing and firmware updates if applicable.</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "KitchenAid Cooktop Repair",
      // img: "/kitchenaid/kitchenaid-cooktop-repair.webp",
      alt: "KitchenAid Cooktop Repair",
      description: (
        <>
          <p>We repair <strong>KitchenAid gas, electric, and induction cooktops</strong>. Whether you have a <strong>cracked glass top</strong> or a <strong>burner that won't ignite</strong>, we’ve got it covered.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ No power or heat</li>
            <li>✅ Cracked surface glass</li>
            <li>✅ Gas leaks or faulty igniters</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Igniter, switch, relay, and coil replacement.</li>
            <li>✅ Electrical checks and burner tuning.</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Refrigerator Repair",
      heading: "KitchenAid Refrigerator Repair",
      // img: "/kitchenaid/kitchenaid-refrigerator-repair.webp",
      alt: "KitchenAid Refrigerator Repair",
      description: (
        <>
          <p>Our team repairs all <strong>KitchenAid refrigerators</strong>, including French door, side-by-side, and built-in models. Whether it’s a <strong>cooling issue</strong> or <strong>ice maker malfunction</strong>, we restore full function.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Fridge not cooling</li>
            <li>✅ Ice maker not working</li>
            <li>✅ Water leaks or dispenser issues</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>evaporators, compressors, thermostats</strong>.</li>
            <li>✅ Water lines and ice system repairs.</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Dishwasher Repair",
      heading: "KitchenAid Dishwasher Repair",
      // img: "/kitchenaid/kitchenaid-dishwasher-repair.webp",
      alt: "KitchenAid Dishwasher Repair",
      description: (
        <>
          <p>Known for sleek design and quiet performance, <strong>KitchenAid dishwashers</strong> occasionally face leaks, clogs, or drying issues. We fix it all—fast.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dishes not clean or dry</li>
            <li>✅ Water won’t drain</li>
            <li>✅ Leaks or error codes</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Repair or replace <strong>pumps, sensors, and heating elements</strong>.</li>
            <li>✅ Clean and inspect filters, check valves, and electronics.</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Washer Repair",
      heading: "KitchenAid Washer Repair",
      // img: "/kitchenaid/kitchenaid-washer-repair.webp",
      alt: "KitchenAid Washer Repair",
      description: (
        <>
          <p>Keep your laundry cycles running with our <strong>KitchenAid washer repair</strong> service. We solve <strong>vibration, draining, and cycle control issues</strong>.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Washer won’t spin or drain</li>
            <li>✅ Excessive vibration</li>
            <li>✅ Door won’t latch</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Replace <strong>control boards, motors, pumps</strong>.</li>
            <li>✅ Test <strong>door switches, sensors, and hoses</strong>.</li>
          </ul>
        </>
      )
    },
    {
      id: "content7",
      title: "Dryer Repair",
      heading: "KitchenAid Dryer Repair",
      // img: "/kitchenaid/kitchenaid-dryer-repair.webp",
      alt: "KitchenAid Dryer Repair",
      description: (
        <>
          <p>Our <strong>KitchenAid dryer repair</strong> covers all gas and electric models. From <strong>long dry times</strong> to <strong>no heat issues</strong>, we restore ideal performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dryer not heating</li>
            <li>✅ Drum not turning</li>
            <li>✅ Loud noises or burnt smell</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Heating elements, belts, thermostats, and rollers serviced or replaced.</li>
          </ul>
        </>
      )
    },
    {
      id: "content8",
      title: "Ventilation Repair",
      heading: "KitchenAid Hood Repair",
      // img: "/kitchenaid/kitchenaid-hood-repair.webp",
      alt: "KitchenAid Hood Repair",
      description: (
        <>
          <p>We fix <strong>KitchenAid vent hoods</strong>, including under-cabinet, wall-mount, and island designs. Get rid of <strong>noisy or non-functional fans</strong> today.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Hood not venting properly</li>
            <li>✅ Lights or fan not working</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ Diagnose and fix <strong>motors, switches, and wiring</strong>.</li>
          </ul>
        </>
      )
    },
    {
      id: "content9",
      title: "KitchenAid Maintenance",
      heading: "KitchenAid Appliance Maintenance",
      // img: "/kitchenaid/kitchenaid-maintenance.webp",
      alt: "KitchenAid Appliance Maintenance",
      description: (
        <>
          <p>Protect your appliances with regular <strong>KitchenAid maintenance</strong>. We inspect, clean, and tune-up to avoid costly repairs down the road.</p>
          <h3>What’s Included:</h3>
          <ul>
            <li>✅ Electrical diagnostics and safety tests</li>
            <li>✅ Filter cleaning, sensor calibration</li>
            <li>✅ Check motors, fans, seals, and valves</li>
          </ul>
        </>
      )
    },
    {
      id: "content10",
      title: "KitchenAid Installation",
      heading: "KitchenAid Appliance Installation",
      // img: "/kitchenaid/kitchenaid-installation.webp",
      alt: "KitchenAid Appliance Installation",
      description: (
        <>
          <p>We offer white-glove <strong>KitchenAid appliance installation</strong> for homeowners and builders. Every install is <strong>leveled, tested, and ready to use</strong>.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Ranges, cooktops, and wall ovens</li>
            <li>✅ Refrigerators and dishwashers</li>
            <li>✅ Washers, dryers, and hoods</li>
          </ul>
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
