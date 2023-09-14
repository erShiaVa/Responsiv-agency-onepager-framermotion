import React from 'react';
import '../Boost/boost.scss';
import { assets } from '../../assets';
import { IoIosArrowForward } from 'react-icons/io'

function Boost() {
  return (
    <div className="boost">
        <div className="boost container">
            <div className="boost__img">
                <img src={assets.boost_img} alt="#" />
            </div>
            <div className="boost__content">
                <h2 className="heading__two">Boost your agencies by choosing Ninja Developers</h2>
                <p className="description">
                    Create custom landing pages with Shades that convert more visitors 
                    than any website, no coding required.
                </p>
                <div className="boost__marks">
                    <div className="boost_mark">
                        <img src={assets.check_mark} alt="#" />
                        <p className='paragraph'>Unlimited design possibility</p>
                    </div>
                    <div className="boost_mark">
                        <img src={assets.check_mark} alt="#" />
                        <p className='paragraph'>Completely responsive features</p>
                    </div>
                    <div className="boost_mark">
                        <img src={assets.check_mark} alt="#" />
                        <p className='paragraph'>Easy to customize plugins</p>
                    </div>
                    <a className='a-tag' href="#">Learn more<IoIosArrowForward/></a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Boost