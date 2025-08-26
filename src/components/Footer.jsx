import React from 'react';
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <h4>Luxury Appliance Repair by Zaricci</h4>
          <p>
            Precision. Elegance. Legacy. Trusted in luxury appliance care for over 30 years.
          </p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about/">About Us</a></li>
            <li>Address: 814 S. Westgate Ave #119, Los Angeles, CA 90049</li>
            <li>Email: info@luxuryappliance.repair</li>
            <li>Call: (424) 499-7788</li>
            <li><a  href="/sitemap.xml" className="sitemap-link">Sitemap</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <p>We provide high-end appliance repair, installation, and maintenance services.</p>
          <p>10% of revenues goes towards helping low income families fix their appliances.</p>
        </div>

        <div className="footer-section footer-contact">
          <h4>Connect</h4>
          <div className="footer-social">
            <a
              href="https://www.yelp.com/biz/luxury-appliance-repair-by-zaricci-los-angeles"
              target="_blank"
              rel="noopener noreferrer"
              className="yelp-link"
            >
              <img width="64" height="64" loading="lazy"
                src="/svg/yelp.svg"
                alt="Yelp"
                className="yelp-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Zaricci. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
