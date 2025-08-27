import React, { useState, useEffect } from "react";
import "./MegaMenu.css"; // Move styles to a CSS file for better separation
// Reusable Arrow Icon Component
const ArrowIcon = ({ isOpen }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`arrow-icon ${isOpen ? "rotate" : ""}`}
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MegaMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isCloseVisible, setIsCloseVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (menuId) => {
    if (openDropdown === menuId) {
      // Do not toggle it off, just keep it open
      setOpenDropdown(menuId);
      setIsCloseVisible(true);
    } else {
      // Open new dropdown and keep close button visible
      setOpenDropdown(menuId);
      setIsCloseVisible(true);
    }
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
    setIsCloseVisible(false);
  };

  return (
    <header className={`sticky-header ${isSticky ? "fixed" : ""}`}>
      <nav className="navbar">
        <div className="first-row">
          {/* Logo */}
          <a className="logo logo-desktop" href="/">
  <img width="140" height="37" alt="Logo" src="/logo.webp" />
</a>
<a className="logo-mobile" href="/">
  <img width="25" height="25" alt="Mobile Logo" src="/logo-mobile.png" loading="lazy" />
</a>
 {/* Close Button - Always visible when a dropdown is open */}
 {isCloseVisible && (
            <button className="close-btn show" onClick={handleCloseDropdown}>
              ✖
            </button>
          )}
{/* Close Button - Only visible on mobile when a dropdown is open */}
{openDropdown && (
            <button className="close-btn" onClick={handleCloseDropdown}>✖</button>
          )}
          {/* Home Dropdown */}
          <div className="dropdown">
          <button className="dropbtn" onClick={() => handleDropdownToggle("Household")}>
  Longevity Stack <ArrowIcon isOpen={openDropdown === "Services"} />
</button>
            <div className={`dropdown-content ${openDropdown === "Household" ? "show" : ""}`}>
              
              <div className="row">       
                {[
                  [{ label: "All The Supplements", href: "/oven-repair/" },
                  ],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) =>
                      typeof item === "string" ? (
                        <a key={item} href="#">
                          {/* <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */} {item}
                        </a>
                      ) : (
                        <a key={item.label} href={item.href}>
                          {/* <img src={`/svg/${item.label.split(" ")[0].toLowerCase()}.svg`} alt={item.label} /> */} {item.label}
                        </a>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Commercial Dropdown */}
        
             {/* Areas Dropdown 
             <div className="dropdown">
            <button className="dropbtn" onClick={() => handleDropdownToggle("Areas")}>
             <a> VIP<ArrowIcon isOpen={openDropdown === "Areas"} />
            </a></button>
            <div className={`dropdown-content ${openDropdown === "Areas" ? "show" : ""}`}>
              <div className="row">
                {[
                  ["Yearly Maintenance"],
                  ["Maintenance Twice A Year"],
                  ["Donate To Low Income Familisies"],
                ].map((col, idx) => (
                  <div className="column" key={idx}>
                    {col.map((item) => (
                       <a key={item} href="#">
                     {/*  <img src={`/svg/${item.split(" ")[0].toLowerCase()}.svg`} alt={item} /> */}
                     
                     {/*{item}
                   </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>*/}

          {/* Prices Dropdown */}
          
          {/* Phone Number */}
          <a href="#/newsletter/" className="phone-number">NEWSLETTER</a>
        </div>
      </nav>
    </header>
  );
};
export default MegaMenu;
