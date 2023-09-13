import React, { useState } from 'react';
import '../Header/header.scss';
import { assets } from '../../assets';
import { CgClose, CgMenuRight } from 'react-icons/cg';

function Header() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
      <div className={`nav container ${toggle ? 'expanded' : ''}`}>
        <div className="nav__logo">
            <img src={assets.logo_nav} alt='#' />
        </div>
        
        <ul className={`nav__items ${toggle ? 'show' : ''}`}>
            <li>Home</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>News</li>
            <button className="button-secondary">Get in Touch</button>
        </ul>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? <CgClose size={22}/> : <CgMenuRight size={22}/>}
        </div>
      </div>
  )
}

export default Header