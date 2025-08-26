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
      heading: "Viking Range Repair",
      img: "/viking/viking-range-repair.webp",
      alt: "Viking Range Repair",
      description: (
        <>
          <p>We specialize in <strong>Viking range repair</strong>, including dual-fuel, gas, and induction models. From <strong>ignition issues</strong> to <strong>oven temperature inconsistencies</strong>, we restore Viking performance with factory-level precision.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Burners not lighting</li>
            <li>✅ Oven not reaching temperature</li>
            <li>✅ Control panel malfunction</li>
            <li>✅ Convection fan issues</li>
            <li>✅ Gas leaks or shutoff problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>igniters, safety valves, thermostats, and fans</strong>.</li>
            <li>✅ Control boards and touchpads are repaired or replaced as needed.</li>
            <li>✅ We use OEM Viking parts for a long-lasting, safe repair.</li>
          </ul>
        </>
      )
    },
    {
      id: "content2",
      title: "Oven Repair",
      heading: "Viking Oven Repair",
      img: "/viking/viking-oven-repair.webp",
      alt: "Viking Oven Repair",
      description: (
        <>
          <p>Whether it’s a <strong>built-in wall oven</strong> or <strong>double oven combo</strong>, we provide expert <strong>Viking oven repair</strong>. We fix <strong>slow preheating</strong>, <strong>faulty broilers</strong>, and <strong>touchscreen issues</strong> quickly and cleanly.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Oven not heating properly</li>
            <li>✅ Broiler not working</li>
            <li>✅ Digital display or timer issues</li>
            <li>✅ Steam oven not functioning</li>
            <li>✅ Fault codes</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We replace <strong>bake, broil, and convection elements</strong>.</li>
            <li>✅ UI issues are solved through <strong>control board or panel replacement</strong>.</li>
            <li>✅ We recalibrate temperature sensors and verify steam components.</li>
          </ul>
        </>
      )
    },
    {
      id: "content3",
      title: "Cooktop Repair",
      heading: "Viking Cooktop Repair",
      img: "/viking/viking-cooktop-repair.webp",
      alt: "Viking Cooktop Repair",
      description: (
        <>
          <p>We repair <strong>Viking gas, electric, and induction cooktops</strong>. From <strong>burners that won't ignite</strong> to <strong>glass cooktop cracks</strong>, our technicians handle it all.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Gas burners clicking or not lighting</li>
            <li>✅ Induction zones not activating</li>
            <li>✅ Cracked ceramic glass</li>
            <li>✅ No power or sparking controls</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We repair <strong>ignition modules, burner valves, and coils</strong>.</li>
            <li>✅ We replace <strong>glass tops</strong> with precision to preserve appearance.</li>
            <li>✅ All work is done with careful attention to your Viking unit’s luxury finish.</li>
          </ul>
        </>
      )
    },
    {
      id: "content4",
      title: "Refrigerator Repair",
      heading: "Viking Refrigerator Repair",
      img: "/viking/viking-refrigerator-repair.webp",
      alt: "Viking Refrigerator Repair",
      description: (
        <>
          <p>We provide full-service <strong>Viking refrigerator repair</strong> for built-in, column, and French door models. From <strong>cooling issues</strong> to <strong>ice maker malfunctions</strong>, we ensure reliable restoration.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not cooling or fluctuating temps</li>
            <li>✅ Ice maker not producing ice</li>
            <li>✅ Frost buildup or leaks</li>
            <li>✅ Strange noises or buzzing</li>
            <li>✅ Water dispenser not working</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We test <strong>compressors, thermostats, evaporators, and fans</strong>.</li>
            <li>✅ Ice makers and water lines are unclogged or replaced as needed.</li>
            <li>✅ We keep your Viking fridge running at factory standards.</li>
          </ul>
        </>
      )
    },
    {
      id: "content5",
      title: "Dishwasher Repair",
      heading: "Viking Dishwasher Repair",
      img: "/viking/viking-dishwasher-repair.webp",
      alt: "Viking Dishwasher Repair",
      description: (
        <>
          <p>From <strong>spotty dishes</strong> to <strong>leaking doors</strong>, we provide professional <strong>Viking dishwasher repair</strong>. We service both new and legacy models for dependable, quiet performance.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dishes not clean or dry</li>
            <li>✅ Dishwasher won’t start</li>
            <li>✅ Leaking from bottom or door</li>
            <li>✅ Drainage or fill problems</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We service <strong>inlet valves, circulation pumps, float switches</strong>.</li>
            <li>✅ Door gaskets and drain hoses are replaced as needed.</li>
            <li>✅ Digital errors are reset or corrected with updated boards.</li>
          </ul>
        </>
      )
    },
    {
      id: "content6",
      title: "Washer Repair",
      heading: "Viking Washer Repair",
      img: "/viking/viking-washer-repair.webp",
      alt: "Viking Washer Repair",
      description: (
        <>
          <p>We handle <strong>Viking washing machine repairs</strong> with expertise in front-load and high-efficiency models. Whether it’s a <strong>leak</strong> or <strong>error code</strong>, we diagnose fast and fix it right.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Not draining or spinning</li>
            <li>✅ Door won’t lock/unlock</li>
            <li>✅ Loud noise or vibration</li>
            <li>✅ Display not responding</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We check <strong>drain pumps, belts, and door latches</strong>.</li>
            <li>✅ Shock absorbers and bearings are inspected and replaced.</li>
            <li>✅ Electronics and sensors are diagnosed using OEM Viking tools.</li>
          </ul>
        </>
      )
    },
    {
      id: "content7",
      title: "Dryer Repair",
      heading: "Viking Dryer Repair",
      img: "/viking/viking-dryer-repair.webp",
      alt: "Viking Dryer Repair",
      description: (
        <>
          <p>Our team repairs <strong>Viking dryers</strong> with a focus on <strong>heat control, sensor functionality, and drum movement</strong>. We restore high-end drying without delay.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Dryer not heating</li>
            <li>✅ Long dry times</li>
            <li>✅ Drum not turning</li>
            <li>✅ Error codes on display</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We inspect <strong>thermal fuses, heating coils, sensors</strong>.</li>
            <li>✅ Drum belts, motors, and rollers are tested and replaced.</li>
            <li>✅ Digital boards are reset or replaced for consistent control.</li>
          </ul>
        </>
      )
    },
    {
      id: "content8",
      title: "Ventilation Repair",
      heading: "Viking Ventilation Repair",
      img: "/viking/viking-hood-repair.webp",
      alt: "Viking Hood Repair",
      description: (
        <>
          <p>Our technicians repair <strong>Viking hoods</strong> — including chimney, island, and wall hoods. Whether your fan is loud or lights won’t turn on, we bring it back to peak extraction.</p>
          <h3>Common Problems:</h3>
          <ul>
            <li>✅ Loud humming or rattling</li>
            <li>✅ No suction or airflow</li>
            <li>✅ Buttons or lights not working</li>
          </ul>
          <h3>How We Fix It</h3>
          <ul>
            <li>✅ We test <strong>motors, capacitors, and control boards</strong>.</li>
            <li>✅ Fan blades and housings are cleaned and secured.</li>
            <li>✅ We restore quiet, effective ventilation without disturbing your cabinetry.</li>
          </ul>
        </>
      )
    },
    {
      id: "content9",
      title: "Viking Maintenance",
      heading: "Viking Appliance Maintenance",
      img: "/viking/viking-maintenance.webp",
      alt: "Viking Maintenance",
      description: (
        <>
          <p>Preventative <strong>Viking appliance maintenance</strong> extends the life and performance of your high-end investment. Our multi-point inspections help catch problems before they start.</p>
          <h3>Maintenance Services Include:</h3>
          <ul>
            <li>✅ Clean & calibrate burners and heating elements</li>
            <li>✅ Check door seals, gaskets, and hinges</li>
            <li>✅ Flush water lines and clean filters</li>
            <li>✅ Inspect compressors, sensors, and fans</li>
          </ul>
          <p>Ask about our <strong>seasonal maintenance specials</strong> for optimal performance year-round.</p>
        </>
      )
    },
    {
      id: "content10",
      title: "Viking Installation",
      heading: "Viking Appliance Installation",
      img: "/viking/viking-installation.webp",
      alt: "Viking Installation",
      description: (
        <>
          <p>Our professional team offers <strong>Viking appliance installation</strong> — ensuring your unit is properly leveled, vented, sealed, and connected. We install all models safely and neatly.</p>
          <h3>We Install:</h3>
          <ul>
            <li>✅ Ranges and cooktops</li>
            <li>✅ Ovens and wall units</li>
            <li>✅ Refrigerators and freezers</li>
            <li>✅ Dishwashers and hoods</li>
            <li>✅ Washers and dryers</li>
          </ul>
          <p>Every install includes <strong>function testing, cleanup, and expert support</strong> for peace of mind.</p>
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
