import React from 'react';
import './footer.scss';
import { assets } from '../../assets';
import { AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';

function Footer() {
  return (
    <footer className='footer container'>
      <div className="footer__logo">
        <img src={assets.logo_nav} alt="#" />
      </div>
      <div className="footer__items">
        <li className='description'>Home</li>
        <li className='description'>Advertise</li>
        <li className='description'>Supports</li>
        <li className='description'>Marketing</li>
        <li className='description'>FAQ</li>
      </div>
      <div className="footer__icons">
        <AiFillFacebook size={23}/>
        <AiFillInstagram size={23}/>
        <IoLogoYoutube size={23}/>
      </div>
    </footer>
  )
}

export default Footer