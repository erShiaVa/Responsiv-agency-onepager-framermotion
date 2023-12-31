import React from 'react';
import '../Tutorial/tutorial.scss';
import { assets } from '../../assets';

function Tutorial() {
  return (
    <div className='tutorial container'>
        <div className="tutorial__content">
            <p className="description">Quality features</p>
            <h2 className="heading__two">Our unforgettable events tailored to You</h2>
        </div>
        <div className="tutorial__cards">
            <div className="tutorial__card">
                <img src={assets.tutorial_one} alt="#" />
                <div className="card__text">
                    <p className="paragraph">Unlocking Social Success: Strategies for Online Engagement</p>
                    <p className="a-tag">Get Details</p>
                </div>
            </div>
            <div className="tutorial__card">
                <img src={assets.tutorial_three} alt="#" />
                <div className="card__text">
                    <p className="paragraph">AI unleashed: Exploring the future of smart technology</p>
                    <p className="a-tag">Get Details</p>
                </div>
            </div>
            <div className="tutorial__card">
                <img src={assets.tutorial_two} alt="#"/>
                <div className="card__text">
                    <p className="paragraph">Crafting compelling content: Your creative journey begins here</p>
                    <p className="a-tag">Get Details</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tutorial