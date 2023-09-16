import React from 'react';
import '../ServiceSection/servicesection.scss';
import { assets } from '../../assets';

function ServiceSection() {
  return (
    <section className="service">
        <div className="container">
            <div className="service__heading">
                <p className="description">Quality features</p>
                <h2 className="heading__two">Meet exciting feature of app</h2>
            </div>
            <div className="service__items">
                <div className="service__box">
                    <div className="service__item one">
                        <img src={assets.service_one} alt="#" />
                    </div>
                    <div className="service__content">
                        <h3 className='heading__three'>Unlimited Customization</h3>
                        <p className='paragraph'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                </div>
                <div className="service__box">
                    <div className="service__item two">
                        <img src={assets.service_two} alt="#" />
                    </div>
                    <div className="service__content">
                        <h3 className='heading__three'>Shape & resizable</h3>
                        <p className='paragraph'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                </div>
                <div className="service__box">
                    <div className="service__item three">
                        <img src={assets.service_three} alt="#" />
                    </div>
                    <div className="service__content">
                        <h3 className='heading__three'>Editing freedom</h3>
                        <p className='paragraph'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                </div>
                <div className="service__box">
                    <div className="service__item four">
                        <img src={assets.service_four} alt="#" />
                    </div>
                    <div className="service__content">
                        <h3 className='heading__three'>Best Award history</h3>
                        <p className='paragraph'>Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection