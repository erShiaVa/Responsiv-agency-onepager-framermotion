import React from 'react';
import '../Customer/customer.scss';
import { assets } from "../../assets";
import { IoIosArrowForward } from 'react-icons/io';

function Customer() {
  return (
    <section className="customer">
        <div className='customer container'>
            <div className="customer__content">
                <h2 className="heading__two">
                    Free Customer Support to ensure what you like to expect
                </h2>
                <p className="paragraph linebreak">
                    We offer a risk-free trial period of up to two weeks. 
                    You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, 
                    we’ll refund payment or fix issues on our dime period customers.
                </p>
                <p className="paragraph">
                    If you are happy with the developer and wish to continue. 
                    If you are unsatisfied, we’ll refund payment or fix issues.  
                </p> 
                <div className="customer__tag">
                    <a href="#" className="a-tag">Learn more<IoIosArrowForward/></a>
                </div>
            </div>
            <div className="customer__img">
                <img src={assets.cta_img} alt="" />
            </div>
        </div>
    </section>
    
  )
}

export default Customer