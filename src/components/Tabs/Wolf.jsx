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
      heading: "Wolf Range Repair",
      img: "/wolf/wolf-range-repair.webp",
      alt: "Wolf Range Repair",
      description: (
        <>
          <p>Our experienced technicians specialize in <strong>Wolf range repair</strong> — from dual-fuel and gas models to induction and steam combinations. Whether it’s a <strong>burner ignition issue</strong> or temperature inconsistency, we restore full performance while respecting the integrity of your kitchen.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burner not igniting or clicking</li>
            <li>✅ Oven not heating properly</li>
            <li>✅ Temperature fluctuations</li>
            <li>✅ Display or control panel not responding</li>
            <li>✅ Error codes or ignition lockouts</li>
          </ul>
          <h3>How We Fix It</h3>
      <ul>
        <li>✅ We start by inspecting the ignition system — from spark modules and electrodes to gas flow regulators — and replace faulty components using <strong>Wolf OEM parts</strong>.</li>
        <li>✅ For uneven cooking or inaccurate temperatures, we calibrate oven sensors, replace worn bake or broil elements, and verify airflow with convection systems.</li>
        <li>✅ If your <strong>Wolf range</strong> is showing error codes or the control panel is unresponsive, we diagnose the relay board, touchpad, and internal fuses — resolving software or hardware faults at the source.</li>
        <li>✅ Our repairs are done with respect for your cabinetry and home — no mess, no guesswork, just precision <strong>Wolf range service</strong>. </li>
      </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "Wolf Oven Repair",
      img: "/wolf/wolf-oven-repair.webp",
      alt: "Wolf Oven Repair",
      description: (
        <>
          <p>We repair <strong>Wolf wall ovens</strong>, convection ovens, and speed ovens with precision. Whether you're dealing with a <strong>broken heating element</strong> or a <strong>malfunctioning door sensor</strong>, our team provides fast and professional solutions.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven not heating evenly</li>
            <li>✅ Convection fan not working</li>
            <li>✅ Touchscreen or controls unresponsive</li>
            <li>✅ Door won’t close or lock</li>
            <li>✅ Bake/Broil elements failing</li>
          </ul>
          <h3>How We Fix It</h3>
      <ul>
        <li>✅ We inspect and replace faulty <strong>bake or broil elements</strong> and calibrate internal thermostats for accurate temperature control.</li>
        <li>✅ For <strong>convection issues</strong>, we test the fan motor, clean internal air pathways, and ensure even airflow for consistent cooking.</li>
        <li>✅ When digital controls fail, we diagnose the <strong>touchpad, display panel, and main control board</strong> — repairing or replacing components with Wolf-certified parts.</li>
        <li>✅ If the oven door won’t close or lock, we realign hinges, replace door sensors, or service the lock motor for proper function.</li>
        <li>✅ Every repair is handled with care — no scratches, no damage, just seamless <strong>Wolf oven restoration</strong>.</li>
      </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "Wolf Cooktop Repair",
      img: "/wolf/wolf-cooktop-repair.webp",
      alt: "Wolf Cooktop Repair",
      description: (
        <>
          <p>From <strong>Wolf gas cooktops</strong> to <strong>induction and electric models</strong>, we handle all repairs quickly and discreetly. Our team troubleshoots burner issues, sensor failures, and induction coil malfunctions with expert care.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Gas burner not lighting</li>
            <li>✅ Induction zone not heating</li>
            <li>✅ Cracked glass top</li>
            <li>✅ Power or control board issues</li>
          </ul>
          <h3>How We Fix It</h3>
      <ul>
        <li>✅ We clean and realign <strong>igniters and burner caps</strong>, replace faulty spark modules, and ensure safe gas flow on <strong>Wolf gas cooktops</strong>.</li>
        <li>✅ For <strong>induction and electric models</strong>, we test and replace damaged coils, sensors, and surface elements to restore full heating performance.</li>
        <li>✅ Cracked or shattered glass tops are safely removed and replaced with exact-match <strong>Wolf OEM panels</strong>.</li>
        <li>✅ If you're dealing with <strong>power loss</strong> or unresponsive controls, we diagnose the transformer, power board, and user interface to pinpoint the failure.</li>
        <li>✅ Every repair is performed cleanly and precisely, preserving the look and functionality of your Wolf cooktop.</li>
      </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Rangetop Repair",
      heading: "Wolf Rangetop Repair",
      img: "/wolf/wolf-rangetop-repair.webp",
      alt: "Wolf Rangetop Repair",
      description: (
        <>
          <p>We specialize in <strong>Wolf rangetop repair</strong> for high-end kitchens. If you’re having trouble with simmer settings, flame control, or clicking burners, we bring fast, factory-level service directly to your home.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners clicking or not lighting</li>
            <li>✅ Flame too high or low</li>
            <li>✅ Broken knobs or igniters</li>
          </ul>
          <h3>How We Fix It</h3>
      <ul>
        <li>✅ We clean and adjust the <strong>burner ports</strong> and replace worn-out igniters to restore reliable ignition.</li>
        <li>✅ If the flame is erratic, we calibrate the <strong>gas valves and regulator</strong> to ensure proper fuel pressure and flame height.</li>
        <li>✅ We replace <strong>damaged knobs, spark modules, and ignition switches</strong> using genuine Wolf parts to maintain both function and luxury aesthetics.</li>
        <li>✅ Our team checks for <strong>loose wiring, moisture intrusion, and gas line leaks</strong> to prevent recurring issues and ensure safe operation.</li>
        <li>✅ You’ll receive a precision repair experience that matches the quality and design of your Wolf rangetop.</li>
      </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Ventilation Repair",
      heading: "Wolf Ventilation Hood Repair",
      img: "/wolf/wolf-hood-repair.webp",
      alt: "Wolf Vent Hood Repair",
      description: (
        <>
          <p>Proper ventilation is essential in any kitchen. Our team services <strong>Wolf vent hoods</strong> and downdraft systems to ensure quiet, powerful performance and seamless design integration.</p>
          <h3>Types of Wolf Ventilation We Repair:</h3>
      <ul>
        <li>✅ Wall-mounted chimney hoods</li>
        <li>✅ Island hoods</li>
        <li>✅ Downdraft ventilation systems</li>
        <li>✅ Under-cabinet hoods</li>
        <li>✅ Pro wall hoods with liners</li>
        <li>✅ Ceiling-mounted ventilation</li>
        <li>✅ Custom insert hoods</li>
      </ul>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Fan not turning on</li>
            <li>✅ Lights not working</li>
            <li>✅ Excessive noise or vibration</li>
            <li>✅ Control panel or speed settings not responding</li>
          </ul>
          <h3>How We Fix It</h3>
      <ul>
        <li>✅ We inspect the <strong>fan motor, capacitor, and control board</strong> to diagnose power and speed issues.</li>
        <li>✅ Noisy operation? We secure or replace <strong>vibration mounts, filters, or worn-out blowers</strong> to restore quiet performance.</li>
        <li>✅ For lighting problems, we test and replace <strong>LED drivers, wiring, or bulb sockets</strong> using Wolf-compatible parts.</li>
        <li>✅ If controls are unresponsive, we reset or replace the <strong>touch panel, speed controller, or circuit board</strong>.</li>
        <li>✅ Whether it's a chimney-style hood or integrated downdraft, our repair keeps your kitchen ventilated and refined.</li>
      </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Maintenance Services",
      heading: "Wolf Maintenance Services",
      img: "/wolf/wolf-maintenance-services.webp",
      alt: "Wolf Appliance Maintenance",
      description: (
        <>
          <p>Protect your investment with scheduled <strong>Wolf appliance maintenance</strong>. Our service includes performance tuning, part inspections, and cleaning to keep your cooking appliances in peak condition.</p>
          <p><strong>Why it matters:</strong> Even high-end appliances like Wolf can lose efficiency or develop hidden faults over time. Routine maintenance ensures optimal performance, extends appliance lifespan, prevents unexpected and costly breakdowns, and helps preserve warranty coverage.</p>
          <h3>What’s Included:</h3>
          <ul>
            <li>✅ Burner and element testing</li>
            <li>✅ Calibration of sensors and thermostats</li>
            <li>✅ Filter and vent cleaning</li>
            <li>✅ Early detection of wear or failure</li>
          </ul>
          
        </>
      )
    },
    {
      id: "content7",
      title: "Installation Services",
      heading: "Wolf Installation Services",
      img: "/wolf/wolf-installation-services.webp",
      alt: "Wolf Appliance Installation",
      description: (
        <>
          <p>Remodeling or upgrading? Our installation experts deliver precise, secure, and clean setup of all <strong>Wolf cooking appliances</strong>, including ranges, cooktops, wall ovens, and ventilation systems.</p>
          <h3>Installation Options:</h3>
          <ul>
            <li>✅ Built-in and flush mount installation</li>
            <li>✅ Gas/electric hook-up and testing</li>
            <li>✅ Range leveling and integration</li>
            <li>✅ Downdraft and hood vent setup</li>
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
