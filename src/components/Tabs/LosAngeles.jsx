import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const items = [
    {
        id: "range",
        title: "Range Repair",
        heading: "High-End Range Repair Los Angeles",
        img: "/cities/los-angeles/range-repair-los-angeles.webp",
        alt: "Luxury Range Repair Los Angeles",
        description: (
          <>
            <p>Your range is the heart of the kitchen. Our technicians have extensive expirience repairing everything from <strong>dual-fuel SKS ranges</strong> to <strong>BlueStar professional cookers</strong>. No matter the issue, we restore performance without sacrificing design.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Burners not igniting</li>
              <li>✅ Oven not heating</li>
              <li>✅ Electrical panel issues</li>
              <li>✅ Overheating or error codes</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Wolf, Viking, SKS, Thermador, La Cornue, Aga, Dacor, Bertazzoni, BlueStar, Elmira Stove Works, Fulgor Milano, La Canche.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We test spark modules, gas valves, relays, and thermostats. Safety, performance, and elegance — we repair with all three in mind.</p>
          </>
        ),
      },
      {
        id: "oven",
        title: "Oven Repair",
        heading: "High-End Oven Repair Los Angeles",
        img: "/cities/los-angeles/oven-repair-los-angeles.webp",
        alt: "Luxury Oven Repair Los Angeles",
        description: (
          <>
            <p>We’ve repaired everything from <strong>Wolf wall ovens</strong> to <strong>La Cornue chateau ranges</strong>. Precision is key, especially when your appliance is part of your kitchen’s aesthetic.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Oven not heating properly</li>
              <li>✅ Uneven baking</li>
              <li>✅ Faulty igniters or heating elements</li>
              <li>✅ Touchpad/display issues</li>
              <li>✅ Door not sealing</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Wolf, Miele, Viking, Thermador, Monogram, JennAir (Noir), Aga, La Cornue, Dacor, Bosch, Gaggenau, Elmira Stove Works, Fulgor Milano, La Canche.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We test temperature calibration, inspect igniters, and replace convection fans. Luxury ovens require luxury service — and that’s exactly what we provide in Los Angeles and nearby areas.</p>
          </>
        ),
      },
      {
        id: "cooktop",
        title: "Cooktop Repair",
        heading: "High-End Cooktop Repair Los Angeles",
        img: "/cities/los-angeles/cooktop-repair-los-angeles.webp",
        alt: "Luxury Cooktop Repair Los Angeles",
        description: (
          <>
            <p>Induction, gas, or electric — we’ve seen it all. From <strong>Bertazzoni gas burners</strong> to <strong>Miele induction surfaces</strong>, we repair them with unmatched care.</p>
            <h3>Common Problems:</h3>
            <ul>
              <li>✅ Burner won’t ignite or heat</li>
              <li>✅ Flickering indicators</li>
              <li>✅ Temperature control issues</li>
              <li>✅ Clicking or buzzing noises</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Wolf, Miele, Bosch, Thermador, KitchenAid, Aga, Bertazzoni, La Cornue, JennAir, Monogram, Gaggenau, Elmira Stove Works, Fulgor Milano, La Canche.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We inspect spark modules, relays, temperature sensors, and user interfaces. If needed, we calibrate or replace touch controls for flawless cooking performance.</p>
          </>
        ),
      },
    {
        id: "hood",
        title: "Ventilation Hood Repair",
        heading: "High-End Ventilation & Range Hood Repair Los Angeles",
        img: "/cities/los-angeles/range-hood-repair-los-angeles.webp",
        alt: "Luxury Ventilation & Range Hood Repair Los Angeles",
        description: (
          <>
            <p>Whether it’s a <strong>custom Miele hood insert</strong> or a <strong>Zephyr island unit</strong>, We've repaired hundreds of ventilation systems across high-end homes in Los Angeles and nearby areas.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Fan not working</li>
              <li>✅ Lights out or flickering</li>
              <li>✅ Control buttons unresponsive</li>
              <li>✅ Noise or vibration issues</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Miele, Zephyr, Wolf, Thermador, Monogram, BlueStar, Bertazzoni, Gaggenau, Elmira Stove Works, Fulgor Milano, La Canche.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We replace fan motors, switches, control boards, and restore filtration for quiet, efficient air circulation.</p>
          </>
        ),
      },     
    {
      id: "refrigerator",
      title: "Refrigerator Repair",
      heading: "High-End Refrigerator Repair Los Angeles",
      img: "/cities/los-angeles/refrigerator-repair-los-angeles.webp",
      alt: "High-End Refrigerator Repair",
      description: (
        <>
          <p>At Zaricci, we've worked on hundreds of luxury refrigerators. Whether you own a <strong>Sub-Zero PRO series</strong> or an <strong>SKS built-in</strong>, we know how to handle every issue with precision.</p>
          <h3>Common Problems We Fix:</h3>
          <ul>
            <li>✅ Fridge not cooling</li>
            <li>✅ Uneven temperature zones</li>
            <li>✅ Water leakage</li>
            <li>✅ Compressor or fan failure</li>
            <li>✅ Digital control board malfunctions</li>
          </ul>
          <h3>Brands We Repair:</h3>
          <p><strong>Sub-Zero, Miele, Thermador, Bosch, KitchenAid, JennAir, Monogram, SKS, True Residential, Fisher & Paykel, Gaggenau, Elmira Stove Works, Fulgor Milano.</strong></p>
          <h3>How We Fix It:</h3>
          <p>We start with sealed system diagnostics, then move to sensors, airflow fans, and digital controls. Every part we use is factory-authorized to protect your investment.</p>
        </>
      ),
    },
    {
        id: "freezer",
        title: "Freezer Repair",
        heading: "High-End Freezer Repair Los Angeles",
        img: "/cities/los-angeles/freezer-repair-los-angeles.webp",
        alt: "High-End Freezer Repair Los Angeles",
        description: (
          <>
            <p>From <strong>built-in Sub-Zero freezer drawers</strong> to <strong>standalone Viking models</strong>, we handle all types of freezer repairs with unmatched attention to detail.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Ice build-up or frost issues</li>
              <li>✅ Freezer not cooling</li>
              <li>✅ Noise or compressor failures</li>
              <li>✅ Digital control errors</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Sub-Zero, Viking, Miele, Monogram, JennAir, Bosch, Thermador, Gaggenau.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We diagnose evaporator coils, defrost timers, fans, and control boards. Our high-end repair process ensures reliability and quiet operation.</p>
          </>
        ),
      },
      {
        id: "beverage",
        title: "Beverage Center Repair",
        heading: "High-End Beverage Center Repair Los Angeles",
        img: "/cities/los-angeles/beverage-center-repair-los-angeles.webp",
        alt: "Luxury Beverage Center Repair Los Angeles",
        description: (
          <>
            <p>We’ve serviced <strong>built-in beverage centers</strong> from <strong>U-Line</strong>, <strong>Perlick</strong>, and <strong>True Residential</strong> across modern kitchens and home bars throughout Los Angeles. These appliances are more than fridges — they’re temperature-controlled showpieces.</p>
      
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Inconsistent cooling or warm zones</li>
              <li>✅ Excess condensation or moisture</li>
              <li>✅ Loud compressor or fan noise</li>
              <li>✅ Lighting or digital display issues</li>
              <li>✅ Leaks or water pooling</li>
            </ul>
      
            <h3>Brands We Repair:</h3>
            <p><strong>U-Line, Perlick, True Residential, Monogram, JennAir, Miele, KitchenAid, Sub-Zero, Fisher & Paykel.</strong></p>
      
            <h3>How We Fix It:</h3>
            <p>We inspect and recalibrate thermostats, fans, compressors, and control boards. Whether under-counter or fully integrated, your beverage center deserves flawless performance and quiet reliability — and that’s exactly what we deliver in LA.</p>
          </>
        ),
      },
      
      {
        id: "icemaker",
        title: "Ice Maker Repair",
        heading: "High-End Ice Maker Repair Los Angeles",
        img: "/cities/los-angeles/ice-maker-repair-los-angeles.webp",
        alt: "Luxury Ice Maker Repair",
        description: (
          <>
            <p>We’ve worked on <strong>panel-ready Sub-Zero ice machines</strong> and <strong>GE Monogram undercounter units</strong>. We fix residential and built-in ice makers for elite homes across LA.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ No ice production</li>
              <li>✅ Ice melting or clumping</li>
              <li>✅ Water leaks</li>
              <li>✅ Loud operation or fan issues</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Sub-Zero, Scotsman, Monogram, Viking, True Residential</strong></p>
            <h3>How We Fix It:</h3>
            <p>We inspect inlet valves, fill systems, evaporator plates, and ensure water lines are filtered and secured for optimal performance.</p>
          </>
        ),
      },
      {
        id: "dryer",
        title: "Dryer Repair",
        heading: "High-End Dryer Repair Los Angeles",
        img: "/cities/los-angeles/dryer-repair-los-angeles.webp",
        alt: "High-End Dryer Repair Los Angeles",
        description: (
          <>
            <p>Our team handles <strong>vented and ventless dryers</strong> from <strong>Miele</strong>, <strong>Bosch</strong>, and <strong>LG Signature</strong>. Performance and quiet operation are our top priorities.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Not heating</li>
              <li>✅ Overheating</li>
              <li>✅ Drum not spinning</li>
              <li>✅ Digital controls failing</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Miele, Bosch, Monogram, Fisher & Paykel, ASKO, Speed Queen.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We test heating elements, sensors, motors, and replace drive belts with precision and care.</p>
          </>
        ),
      },
      {
        id: "washing",
        title: "Washing Machine Repair",
        heading: "High-End Washing Machine Repair Los Angeles",
        img: "/cities/los-angeles/washing-machine-repair-los-angeles.webp",
        alt: "High-End Washing Machine Repair Los Angeles",
        description: (
          <>
            <p>Whether it’s a <strong>Miele front-loader</strong> or a <strong>Bosch washer</strong>, we’ve repaired units across luxury homes throughout Los Angeles and nearby areas.</p>
            <h3>Common Problems:</h3>
            <ul>
              <li>✅ Not draining or spinning</li>
              <li>✅ Leaks or shaking during spin cycle</li>
              <li>✅ Error codes or electronic failure</li>
              <li>✅ Door not locking or unlocking</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Miele, LG Signature, Bosch, Electrolux, Fisher & Paykel, Monogram, ASKO, Speed Queen.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We inspect drain pumps, pressure sensors, shock absorbers, and electronic control units for fast, reliable resolution.</p>
          </>
        ),
      },
      {
        id: "dishwasher",
        title: "Dishwasher Repair",
        heading: "High-End Dishwasher Repair Los Angeles",
        img: "/cities/los-angeles/dishwasher-repair-los-angeles.webp",
        alt: "Luxury Dishwasher Repair",
        description: (
          <>
            <p>I’ve serviced integrated dishwashers hidden behind <strong>custom cabinetry</strong>. We ensure performance without disturbing your design aesthetic.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Not draining</li>
              <li>✅ Dishes not clean or dry</li>
              <li>✅ Leaks or foul smells</li>
              <li>✅ Error codes or no power</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Cove, Miele, Bosch, Thermador, Fisher & Paykel, JennAir, Monogram, Gaggenau, Elmira Stove Works, Fulgor Milano, KitchenAid.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We clean filters, replace pumps, recalibrate sensors, and restore full luxury performance with quiet operation.</p>
          </>
        ),
      },
      {
        id: "warming",
        title: "Warming Drawer Repair",
        heading: "High-End Warming Drawer Repair Los Angeles",
        img: "/cities/los-angeles/warming-drawer-repair-los-angeles.webp",
        alt: "Warming Drawer Repair Los Angeles",
        description: (
          <>
            <p>From <strong>Wolf stainless steel drawers</strong> to <strong>panel-matched Miele units</strong>, we service warming drawers that are both functional and elegant.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Not warming</li>
              <li>✅ Overheating</li>
              <li>✅ Drawer stuck or won’t close</li>
              <li>✅ Electronic control issues</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Wolf, Miele, Thermador, Monogram, JennAir, Dacor, Gaggenau, Fulgor Milano, La Canche.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We calibrate thermostats, test heating elements, and restore drawer glide systems for smooth operation.</p>
          </>
        ),
      },
    {
      id: "winecooler",
      title: "Wine Cooler Repair",
      heading: "Wine Preservation Unit Repair Los Angeles",
      img: "/cities/los-angeles/wine-cooler-repair-los-angeles.webp",
      alt: "Wine Cooler Repair Los Angeles",
      description: (
        <>
         <p>Wine coolers are delicate. They’re not just about temperature — they’re about humidity, vibration, and design. We’ve worked on <strong>Sub-Zero</strong> and <strong>True Residential</strong> wine units across LA's most exclusive homes.</p>

<h3>Common Problems:</h3>
<ul>
  <li>✅ Unit not cooling properly</li>
  <li>✅ Temperature zones unbalanced</li>
  <li>✅ Excess vibration</li>
  <li>✅ Condensation issues</li>
  <li>✅ Digital controls failing</li>
</ul>

<h3>Brands We Repair:</h3>
<p><strong>Sub-Zero, True Residential, Fisher & Paykel, JennAir, Gaggenau, Miele, Thermador, Dacor.</strong></p>

          <h3>How We Fix It:</h3>
          <p>We check fan operation, sensor accuracy, seal integrity, and recalibrate control boards. When aesthetics matter, we work clean and quiet.</p>
        </>
      ),
    },
    {
        id: "winecellar",
        title: "Wine Cellar Repair",
        heading: "Climate System & Wine Cellar Repair Los Angeles",
        img: "/cities/los-angeles/wine-cellar-repair-los-angeles.webp",
        alt: "Wine Cellar Repair Los Angeles",
        description: (
          <>
            <p>We maintain <strong>climate-controlled wine cellars</strong> from <strong>WhisperKOOL</strong> and <strong>Wine Guardian</strong> in some of LA’s most exclusive residences.</p>
            <h3>Common Problems:</h3>
            <ul>
              <li>✅ Climate system failure</li>
              <li>✅ Humidity fluctuation</li>
              <li>✅ Refrigerant or fan issues</li>
              <li>✅ Temperature inconsistencies</li>
            </ul>
            <h3>Brands We Service:</h3>
            <p><strong>WhisperKOOL, CellarPro, Breezaire, Wine Guardian, KoolR, Sub-Zero, True Residential, Perlick</strong></p>
            <h3>How We Fix It:</h3>
            <p>We calibrate sensors, check compressor lines, and service filters for optimal long-term wine preservation.</p>
          </>
        ),
      },
      {
        id: "grill",
        title: "BBQ Grill Repair",
        heading: "High-End BBQ Grill Repair Los Angeles",
        img: "/cities/los-angeles/bbq-grill-repair-los-angeles.webp",
        alt: "High-End BBQ Grill Repai Los Angeles",
        description: (
          <>
            <p>From <strong>built-in Lynx grills</strong> to <strong>standalone Viking BBQs</strong>, we bring precision diagnostics and weatherproof expertise to your outdoor kitchen.</p>
            <h3>Common Problems:</h3>
            <ul>
              <li>✅ Burners won’t ignite</li>
              <li>✅ Flame irregularities</li>
              <li>✅ Grill not heating evenly</li>
              <li>✅ Ignition systems failing</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Viking, Hestan, Weber, Big Chill, Lynx, Wolf, DCS, Alfresco, Kalamazoo, Fisher & Paykel.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We test gas flow, igniters, valves, and sensors. Your backyard entertaining deserves top-tier performance.</p>
          </>
        ),
      },
      {
        id: "pizzaoven",
        title: "Pizza Oven Repair",
        heading: "High-End Pizza Oven Repair Los Angeles",
        img: "/cities/los-angeles/pizza-oven-repair-los-angeles.webp",
        alt: "Luxury Pizza Oven Repair",
        description: (
          <>
            <p>Our clients enjoy <strong>Wolf built-in pizza ovens</strong> and <strong>Alfa outdoor units</strong>. We’ve serviced the finest ovens for gourmet kitchens across LA.</p>
            <h3>Common Problems:</h3>
            <ul>
              <li>✅ Uneven heating or stone damage</li>
              <li>✅ Digital display or thermostat failures</li>
              <li>✅ Igniter not working</li>
              <li>✅ Excess smoke or ventilation issues</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Wolf, Alfa, Kalamazoo, Lynx, Fontana Forni, Gozney</strong></p>
            <h3>How We Fix It:</h3>
            <p>We test burners, elements, and sensors while calibrating to artisan-level precision. Whether indoor or outdoor, we make sure it performs flawlessly.</p>
          </>
        ),
      },
      {
        id: "coffee",
        title: "Coffee Machine Repair",
        heading: "Built-In Coffee System Repair Los Angeles",
        img: "/cities/los-angeles/coffee-machine-repair-los-angeles.webp",
        alt: "Built-In Coffee System Repair Los Angeles",
        description: (
          <>
            <p>We love repairing these machines. From <strong>Miele plumbed coffee makers</strong> to <strong>Thermador built-ins</strong>, these systems require a trained hand.</p>
            <h3>Common Problems We Fix:</h3>
            <ul>
              <li>✅ Not brewing properly</li>
              <li>✅ Grinder malfunction</li>
              <li>✅ Leaking or pressure loss</li>
              <li>✅ Milk frother failure</li>
            </ul>
            <h3>Brands We Repair:</h3>
            <p><strong>Miele, Thermador, Bosch, JennAir, Monogram, Gaggenau, Fulgor Milano.</strong></p>
            <h3>How We Fix It:</h3>
            <p>We descale, replace pumps and O-rings, test brewing temperatures, and fine-tune every setting to perfection.</p>
          </>
        ),
      },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setActiveTab(mobile ? null : "refrigerator");
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
              <div
                key={item.id}
                className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}
              >
                <h2>{item.heading}</h2>
                <div className="tab-body-float">
                  {item.img && <img width="360" height="360" src={item.img} alt={item.alt} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item, index) => (
            <div key={item.id} className="accordion-item" ref={(el) => (itemRefs.current[index] = el)}>
              <div onClick={() => setActiveTab((prev) => (prev === item.id ? null : item.id))} className="accordion-header">
                {item.title}<span className="accordion-icon">{activeTab === item.id ? "−" : "+"}</span>
              </div>
              {activeTab === item.id && (
                <div className="accordion-content">
                  <h2>{item.heading}</h2>
                  {item.img && <img src={item.img} alt={item.alt} className="image-float" loading="lazy" />}
                  <div>{item.description}</div>
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
