import React, { useRef, useState } from 'react'
import "./Navbar.css";
// import 'Components/Navbar/Navbar.css';
// import logo from '../../assets/logo.svg'
import logo from '../../../public/assets/main_logo.png';
import underline from '../../../public/assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../../public/assets/menu_open.svg';
import menu_close from '../../../public/assets/menu_close.svg';

const Navabar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  const handleLinkClick = (menuItem) => {
    setMenu(menuItem);
    // Add a small delay before closing the menu
    setTimeout(() => {
      closeMenu();
    }, 100);
  };

  return (
    <div className='navbar'>
      {/* <img src="/assets/ghb-logo.png" alt="GHB Logo" style={{ width: "500px", height: "500"  }} /> */}

      <img src={logo}  alt='' style={{ width: "200px", height: "auto" }} />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
      {/* <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=> setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underline} alt=''/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt=''/> : <></>}</li> */}

        <li>
  <AnchorLink className='anchor-link' href='#home'>
    <p onClick={() => handleLinkClick("home")}>Home</p>
  </AnchorLink>
  {menu === "home" ? <img src={underline} alt=''/> : null}
</li>

<li>
  <AnchorLink className='anchor-link' offset={50} href='#about'>
    <p onClick={() => handleLinkClick("about")}>About Me</p>
  </AnchorLink>
  {menu === "about" ? <img src={underline} alt=''/> : null}
</li>

<li>
  <AnchorLink className='anchor-link' offset={50} href='#services'>
    <p onClick={() => handleLinkClick("services")}>Services</p>
  </AnchorLink>
  {menu === "services" ? <img src={underline} alt=''/> : null}
</li>

<li>
  <AnchorLink className='anchor-link' offset={50} href='#education'>
    <p onClick={() => handleLinkClick("education")}>Education</p>
  </AnchorLink>
  {menu === "education" ? <img src={underline} alt=''/> : null}
</li>

<li>
  <AnchorLink className='anchor-link' offset={50} href='#experience'>
    <p onClick={() => handleLinkClick("experience")}>Experience</p>
  </AnchorLink>
  {menu === "experience" ? <img src={underline} alt=''/> : null}
</li>

<li>
  <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
    <p onClick={() => handleLinkClick("portfolio")}>Portfolio</p>
  </AnchorLink>
  {menu === "portfolio" ? <img src={underline} alt=''/> : null}
</li>

      </ul>
{/*       <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
       */}
    </div>
  )
}

export default Navabar
