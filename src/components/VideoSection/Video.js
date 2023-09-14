import React from 'react';
import '../VideoSection/video.scss';
import { IoIosArrowForward } from 'react-icons/io';
import { assets } from '../../assets';

function Video() {
  return (
    <div className='video container'>
        <div className="video__content">
            <h2 className="heading__two">Leading companies trust us to develop software</h2>
            <p className="paragraph">
                We believe it’s important for everyone to have access to software
                especially when it comes to digital learning be navigate.
            </p>
        </div>
        <div className='video__tag'>
            <a href="" className="a-tag">Explore Details<IoIosArrowForward/></a>
        </div>
        <div className="video__img">
            <img src={assets.video__img} alt="#" />
        </div>
    </div>
  )
}

export default Video