import React, { useState } from 'react';
import '../Cards/cards.scss';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';


function Cards() { 

    const [isOpen, setIsOpen] = useState(false);

  return (  
    <div className='cards container'>
        <motion.div 
            transition={{ layout: { duration: 1, type: "spring" } }} 
            layout onClick={() => setIsOpen(!isOpen)} 
            style={{ borderRadius: "0.75rem", boxShadow: "2px 2px 6px 0px rgba(89, 88, 88, 0.10)" }}
            className='card'
        >
            <motion.h3 layout="position" className='heading__three'>
                Optimize everything from the ground up 🚀
            </motion.h3>
                {isOpen && (
                <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                    <p className="paragraph linebreak">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit expedita quia minus voluptatibus 
                        tempora labore eius natus enim.
                    </p>
                    <p className="paragraph">
                        Sit amet consectetur adipisicing elit. 
                        Reprehenderit expedita quia minus voluptatibus 
                        tempora labore eius natus enim. Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Eaque omnis iste perferendis 
                        repudiandae nesciunt. Eos est nam ex odio aliquid.
                    </p>
                    <div className="cards__button">
                        <p className="a-tag">Read more<IoIosArrowForward/></p>
                    </div>
                </motion.div>
            )}
        </motion.div>
    </div>
  )  
}   


export default Cards