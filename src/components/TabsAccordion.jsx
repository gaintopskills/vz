import React, { useState, useEffect, useRef } from "react";


export const Tabs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("content1");
  const containerRef = useRef(null);

  const items = [
    {
      id: "content1",
      title: "Why Choose Us",
      heading:"Why Choose Same Day Appliance Repair for Dryer Repair Services?",
      img: "/dryer-repair/dryer-repair-1.webp",
      description: (
        <><p >When you select <strong>Same Day Appliance Repair</strong>, you're opting for expert technicians who can <strong>diagnose</strong> your <strong>dryer issues</strong>, find <strong>fast fixes</strong>, and provide ongoing maintenance tips to extend your appliance's <strong>life</strong>. We're committed to <strong>quickly finding and fixing any dryer issue</strong>, whether an <strong>electric dryer</strong> won't heat or a gas dryer not drying clothes efficiently.</p><ul> <p><strong>Same-Day Appointments</strong>: We understand how vital a functioning dryer is in your daily life. That's why we offer same-day and flexible appointment times to work around your schedule.</p>  <p><strong>Certified Technicians</strong>: Our team is highly trained and certified, with hands-on experience across all major dryer brands and models. You can trust that we'll diagnose the issue accurately and recommend the most cost-effective solution.</p>  <p><strong>Use of Original Parts</strong>: We only use original parts from trusted suppliers, each backed by warranties that typically start at three months. Quality parts ensure longevity and reliable performance to avoid repeated repairs.</p>  <p><strong>Transparent Pricing</strong>: Before we start any repair, you'll receive a detailed breakdown of the costs. Our transparency ensures you always know what to expect with no hidden fees.</p> </ul>
        </>
      ),
    },
    {
      id: "content2",
      title: "Types of Dryers We Repair",
      heading:"Types of Dryers We Repair and Our Specialized Approach",
      img: "/dryer-repair/dryer-repair-2.webp",
      description: (
        <><p >With extensive experience across various <strong>dryer types</strong>, our <strong>dryer repair services</strong> handle <strong>issues</strong> of every kind. Here's our approach to each <strong>dryer type</strong>:</p><h3><strong>Electric Dryer Repair</strong></h3><p >Electric <strong>dryers</strong> are reliable and widely used, but common <strong>issues</strong> include faulty thermostats, broken heating elements, and electrical connection <strong>problems</strong>. Our <strong>factory-trained</strong> technicians thoroughly inspect all electrical components, <strong>dryer vents</strong>, and heating systems to ensure your <strong>dryer</strong> runs as it should.</p><h3><strong>Gas Dryer Repair</strong></h3><p >Gas <strong>dryers</strong> are energy-efficient and have specific needs for safe performance. Common <strong>issues</strong> include gas valve malfunctions, igniter failures, and thermal fuse replacements. Our team inspects the gas lines, verifies connections, and ensures your <strong>gas dryer</strong> works safely. We only use original <strong>parts</strong> to ensure reliability and a <strong>warranty-backed repair</strong> every time.</p><h3><strong>Vented Dryer Repair</strong></h3><p >Vented <strong>dryers</strong> are designed for optimal drying speeds but often suffer from <strong>dryer vent</strong> clogs, damaged fans, or worn <strong>drum</strong> belts. Our technicians clean and clear the <strong>dryer vent</strong>, inspect fan and belt connections and verify airflow to ensure your <strong>dryer</strong> runs smoothly and safely.</p><h3><strong>Ventless Dryer Repair</strong></h3><p >Ventless <strong>dryers</strong> are compact and ideal for smaller spaces, though they can have clogged filters, condensation problems, or heating challenges. Our technicians are skilled in identifying these <strong>dryer issues</strong> and provide <strong>fixes</strong> that restore efficiency without compromising drying quality.</p>
 </>
      ),
    },
    {
      id: "content3",
      title: "Common Dryer Problems",
      heading:"Common Dryer Problems We Fix",
      img: "/dryer-repair/dryer-repair-6.webp",
      description: (
        <><p >With extensive <strong>experience</strong> handling all types of <strong>dryer issues</strong>, our technicians know how to diagnose and repair a wide range of dryer problems quickly. Here are some of the most common <strong>dryer issues</strong> we see and fix:</p><ul> <p><strong>Dryer Not Heating Properly</strong>: If your <strong>dryer</strong> isn't heating enough to dry clothes, we inspect the heating element, thermostat, and thermal fuse to verify functionality. A <strong>repair</strong> may involve replacing faulty <strong>parts</strong> to restore heating capability.</p>  <p><strong>Dryer Drum Not Spinning</strong>: When the drum stops spinning, it's often due to drive belt, motor, or pulley <strong>issues</strong>. Our technicians adjust or replace <strong>parts</strong> as needed, allowing the <strong>drum</strong> to turn smoothly again.</p>  <p><strong>Dryer Making Unusual Noises</strong>: Strange sounds may be due to worn <strong>drum rollers</strong>, faulty bearings, or an imbalanced load. We verify each component, balance loads, and replace parts to eliminate noise and improve performance.</p>  <p><strong>Dryer Overheating or Shutting Off Mid-Cycle</strong>: If your <strong>dryer</strong> is overheating, it can pose a safety risk. We inspect the <strong>dryer vent</strong> for clogs, check the thermostat, and make the necessary adjustments to prevent overheating, extending the <strong>life</strong> of your <strong>dryer</strong>.</p>  <p><strong>Dryer Door Not Closing Properly</strong>: A loose or malfunctioning door can prevent the <strong>dryer</strong> from working. We inspect the door latch, hinge, and switches and adjust or replace them to ensure a secure closure and safe operation.</p> </ul>
        </>
      ),
    },
    {
      id: "content4",
      title: "Signs Your Dryer Needs Repair",
      heading:"Signs Your Dryer Needs Repair Services– When To Call Us",
      description: (
        <><p >Our <strong>factory-trained</strong> technicians, drawing on years of <strong>experience</strong>, know when your <strong>dryer</strong> may need a professional <strong>repair</strong>. Here's what to watch for:</p><h3><strong>Extended Drying Times</strong></h3><p>When clothes take longer to dry, it's more than just an inconvenience—it's often a sign of airflow or heating <strong>issues</strong>. This may mean a faulty heating element or a clogged <strong>dryer vent</strong>. If you notice these signs, scheduling a dryer repair is best.</p><h3><strong>Unusual Smells</strong></h3><p >Musty or burnt smells often indicate blocked <strong>dryer vents</strong> or an overheated motor. <strong>Addressing</strong> these early can prevent further damage and reduce fire risks. Call us to assess and <strong>fix</strong> the issue for safety and peace of mind.</p><h3><strong>Failure to Start or Complete Cycles</strong></h3><p >If your <strong>dryer</strong> won't start or stops mid-cycle, it may indicate a control board or motor problem. Our team can <strong>diagnose </strong>and <strong>fix</strong> this, ensuring smooth and reliable operation.</p><h3><strong>Consistent Overheating</strong></h3><p >Overheating is often due to airflow problems or a faulty thermal fuse. Immediate attention can prevent damage to other parts of the <strong>dryer</strong> and reduce fire risk.</p> </>
      ),
    },
    {
      id: "content5",
      title: "Why Choose Us",
      heading:"Full-Service Dryer Repair for Every Home",
      description: (
        <><h3><strong>Laundry Room Dryer Repair</strong></h3><p>Your <strong>dryer</strong> is an essential appliance in your home, ensuring clothes are <strong>fresh, dry, and ready</strong> for use. Whether you own a <strong>gas or electric dryer</strong>, a <strong>front-load</strong> or <strong>top-load model</strong>, our expert <strong>technicians</strong> are equipped to address any issue, from <strong>heating problems</strong> to <strong>drum malfunctions</strong>. With our <strong>same-day service</strong>, we guarantee your dryer will be restored to <strong>optimal performance</strong> quickly, helping you avoid <strong>laundry pileups</strong> and keep your home running <strong>smoothly</strong>.</p><h3><strong>Dryer Repair for Large Households</strong></h3><p>Dryers in <strong>large households</strong> need to manage <strong>frequent loads</strong> and withstand <strong>heavy use</strong>. Our technicians specialize in diagnosing and repairing issues specific to <strong>high-capacity units</strong>, including <strong>motor strain</strong>, <strong>drum issues</strong>, and <strong>temperature consistency</strong>. We ensure your dryer operates <strong>efficiently</strong>, providing the <strong>ideal drying environment</strong> for all your laundry needs.</p><h3><strong>High-End and Built-In Dryer Repair</strong></h3><p><strong>Luxury</strong> and <strong>built-in dryers</strong> from brands like <strong>Miele, Bosch,</strong> and <strong>Electrolux</strong> incorporate <strong>advanced technology</strong> and integrate seamlessly into your <strong>laundry room design</strong>. These models, with their <strong>premium finishes</strong>, <strong>specialized drying settings</strong>, and <strong>custom configurations</strong>, require specialized attention. Our technicians are trained to handle <strong>temperature calibration</strong>, <strong>control board repairs</strong>, and <strong>sensor replacements</strong> using only <strong>high-quality parts</strong> and techniques tailored for <strong>luxury models</strong>. We ensure your dryer operates <strong>efficiently</strong> while preserving its <strong>sophisticated style</strong>.</p><h3><strong>Compact and Specialty Dryer Repair</strong></h3><p><strong>Compact</strong> and <strong>specialty dryers</strong>, such as <strong>ventless</strong> or <strong>stackable models</strong>, need precise maintenance to function effectively. We offer <strong>specialized repair services</strong> for these units, addressing <strong>venting issues</strong>, <strong>moisture sensor adjustments</strong>, and <strong>drum motor repairs</strong>. This ensures your compact dryer works <strong>optimally,</strong> even in <strong>small spaces</strong>. Our technicians are committed to keeping your <strong>specialty dryers</strong> running <strong>smoothly</strong> for <strong>efficient laundry care</strong>.</p><p>With <strong>comprehensive repair solutions</strong> for all types of dryers, including <strong>high-end</strong> and <strong>specialty models</strong>, we are here to keep your appliances in <strong>top condition</strong> for <strong>efficient, hassle-free laundry</strong>. <strong>Contact us today</strong> to schedule a <strong>fast and reliable dryer repair service</strong>.</p> </>
      ),
    },
    {
      id: "content6",
      title: "Dryer Maintenance",
      heading:"Dryer Maintenance for Efficiency and Safety",
      description: (
        <><p>Regular maintenance for your dryer is essential not only for <strong>efficient performance</strong> but also to <strong>avoid potential hazards</strong>. A well-maintained dryer helps reduce energy costs, dries clothes faster, and minimizes the risk of breakdowns or fires. Here's why investing in routine dryer maintenance is a smart choice:</p><h3><strong>Dryer Vent Cleaning</strong></h3><p>Dryer vents can easily become clogged with lint and debris, leading to <strong>restricted airflow</strong>. Blocked vents make your dryer work harder, causing <strong>overheating</strong>, leading to premature wear on components, and increasing the risk of fire hazards. Our technicians thoroughly <strong>clean dryer vents</strong> to promote optimal airflow, helping your dryer run more efficiently and extending its lifespan.</p><h3><strong>Lint Trap Checks</strong></h3><p>A clogged lint trap is one of the most common reasons for reduced dryer efficiency. When lint accumulates, it <strong>restricts airflow</strong>, causing clothes to take longer to dry and putting extra strain on the dryer's heating element and motor. Over time, this can lead to costly repairs and higher energy bills. With routine <strong>lint trap maintenance</strong>, we remove buildup that can cause overheating, ensuring that your dryer works <strong>smoothly and safely</strong> with each cycle.</p><h3><strong>Electrical Component Inspection</strong></h3><p>For electric dryers, regular inspections of <strong>thermostats, heating elements,</strong> and <strong>connections</strong> are critical. Faulty electrical components not only compromise the dryer's performance but can also pose safety risks. Our technicians perform thorough checks to confirm that <strong>thermostats and heating elements</strong> are working correctly and that all electrical connections are secure. This proactive approach helps prevent unexpected issues and keeps your dryer operating <strong>safely and reliably</strong>.</p><p>By scheduling routine maintenance, you can <strong>prevent common issues</strong> and save money on future repairs. Our factory-trained technicians understand the specific needs of different dryer models and offer professional, <strong>preventive care</strong> to help extend your dryer's lifespan. Contact us today to set up a maintenance appointment and keep your dryer running at peak performance.</p>  </>
      ),
    },
    {
      id: "content7",
      title: "Repair or Replacement",
      heading:"Deciding Between Dryer Repair and Replacement",
      description: (
        <><p >If your <strong>dryer</strong> frequently breaks down, it might be time to consider whether to <strong>repair or replace</strong> it. A general rule of thumb is that when <strong>repair costs approach 50% of the price of a new dryer</strong>, it's often more cost-effective to upgrade to a <strong>newer, more energy-efficient model</strong>. Our expert technicians will assess your dryer's condition and provide a clear recommendation to help you make the best choice for your home and budget.</p><p >Newer <strong>dryer models</strong> come equipped with <strong>advanced features</strong> that improve <strong>energy efficiency</strong> and <strong>reliability</strong>, translating to significant savings over time. When advising on <strong>repair vs. replacement</strong>, we take into account factors like the <strong>age of your appliance</strong>, <strong>frequency of repairs</strong>, and potential <strong>energy savings</strong>—ensuring you receive the best value for your money.</p></>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      heading:"Contact Us for Dryer Repair Services in Los Angeles",
      description: (
        <><p >If you're dealing with <strong>dryer issues</strong>, don't wait. <strong>Contact Same Day Appliance Repair</strong> to schedule a <strong>dryer repair</strong>. We proudly serve <strong>Los Angeles</strong> and surrounding areas, offering <strong>same-day dryer repair services</strong> for various <strong>dryer models</strong>. For reliable and <strong>affordable dryer repair services</strong>, <strong>call today</strong> to restore convenience to your <strong>home</strong>.</p></>
      ),
    },
  ];
  


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
             <div className={`tab-panel ${activeTab === item.id ? "active-tab" : ""}`}>
             <h2>{item.heading}</h2>
             <div className="tab-body-float">
             {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
             </div>
             <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (424) 499-7788</button>
</a>
           </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="accordion-mobile">
          {items.map((item) => (
            <div key={item.id} className="accordion-item">
              <div
                onClick={() =>
                  setActiveTab((prev) => (prev === item.id ? null : item.id))
                }
                className="accordion-header"
              >
                {item.title}
                <span className="accordion-icon">
                  {activeTab === item.id ? "−" : "+"}
                </span>
              </div>
              {activeTab === item.id && (
               <div className="accordion-content">
               <h2>{item.title}</h2>
               {item.img && (
  <img src={item.img} alt={item.title} className="image-float" loading="lazy" />
)}
               <div>{item.description}</div>
               <a href="#form">
  <button className="tabs-button">Book</button>
</a>
<a href="tel:3238704790">
  <button className="tabs-button">Call: (424) 499-7788</button>
</a>
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
