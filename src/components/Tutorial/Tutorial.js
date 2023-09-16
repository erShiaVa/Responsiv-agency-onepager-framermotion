import React from 'react';
import '../Tutorial/tutorial.scss';
import { assets } from '../../assets';

function Tutorial() {
  return (
    <div className='tutorial container'>
        <div className="tutorial__content">
            <p className="description">Quality features</p>
            <h2 className="heading__two">Tutorials that people love most</h2>
        </div>
        <div className="tutorial__cards">
            <div className="tutorial__card">
                <img src={assets.tutorial_one} alt="#" />
                <div className="card__text">
                    <p className="paragraph">How to work with prototype design with adobe xd featuring tools</p>
                </div>
            </div>
            <div className="tutorial__card">
                <img src={assets.tutorial_three} alt="#" />
                <div className="card__text">
                    <p className="paragraph">How to work with prototype design with adobe xd featuring tools</p>
                </div>
            </div>
            <div className="tutorial__card">
                <img src={assets.tutorial_two} alt="#"/>
                <div className="card__text">
                    <p className="paragraph">How to work with prototype design with adobe xd featuring tools</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tutorial