import React from 'react';
import './hero.scss';
import { assets } from '../../assets';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='hero'>
        <div className='container'>
          <div className="hero__content">
            <h1 className='heading__one'>
              Great Business is built<br/>
              with amazing developers
            </h1>
            <h3 className="heading__three">
              We help build and manage a team of world-class<br/>
              developers to bring your vision to life
            </h3>
            <div className="hero__buttons">
              <button className="button-primary">Get in touch</button>
              <button className="button-secondary">read more</button>
            </div>
            <p className="hero__partner-heading">Sponsored by:</p>
            <div className="hero__partner">
                <img src={assets.partner_one} alt="#" />
                <img src={assets.partner_two} alt="#" />
                <img src={assets.partner_three} alt="#" />
            </div>
          </div>
          <div className="hero__img"></div>
      </div>
    </div>
  )
}

export default Hero