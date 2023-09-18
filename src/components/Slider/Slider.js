import React, { useEffect, useRef, useState } from 'react';
import '../Slider/slider.scss';
import sliderImages from '../../images';
import { motion } from 'framer-motion';


function Slider() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
       // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="slider container">
            <div className="slider__heading">
               <h2 className="heading__two">Our dedicated team will help you</h2> 
            </div>
            <motion.div className='carousel' ref={carousel}>
                <motion.div 
                    className='inner-carousel'
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}
                >
                        {sliderImages.map(sliderImage => {
                            return(
                                <motion.div 
                                    className='slider__item'
                                    key={sliderImage}>
                                        <img src={sliderImage} alt="#" 
                                />
                                </motion.div>
                            );
                        })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Slider