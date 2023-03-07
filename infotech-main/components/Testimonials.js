import React, { useState } from 'react'
import test1 from '../public/images/user.png'
import comp1 from '../public/images/comp12.png'
import comp21 from '../public/images/comp2.jpeg'
import kartik from '../public/images/kartik.jpeg'
import rishi from '../public/images/rishi.jpg'
import navkar_logo from '../public/images/navkar_logo3.png'
import alpine_logo from '../public/images/alpine_logo2.png'

const Testimonials = () => {

  return (
    <div id="testimonials">
      <h1>
        <span>03/</span><span>TESTIMONIALS</span>
      </h1>
      <h2>
        Trusted by many
      </h2>
      <div className='card'>
        <div className='customers'>
          <div className='item'>
            <div className='head'>
              <div className='image'>
                <img src={kartik.src} />
              </div>
              <h1 className='name'>Kartik Patel</h1>
            </div>
            <div className='review'>
              <p>
                WriteSpace InfoTech has made my start-up dreams come true! They have helped me with everything related to technology and development. A job well done!
              </p>
            </div>
          </div>

          <div className='line'></div>

          <div className='item'>
            <div className='head'>
              <div className='image'>
                <img src={rishi.src} />
              </div>
              <h1 className='name'>Rishi Shah</h1>
            </div>
            <div className='review'>
              <p>
                I would gladly pay for doing my projects here. This company has got everything I need. Good communication, skilled team members and a positive attitude.
              </p>
            </div>
          </div>
        </div>
        <div className='companies'>
          <div className='head'>
            <div className='line'></div>
            <h1>TRUSTED BY</h1>
            <div className='line'></div>
          </div>
          <div className='logos'>
            <div className='item'>
              <img src={comp1.src} />
            </div>
            <div className='item'>
              <img src={comp21.src} />
            </div>
            <div className='item'>
              <img src={navkar_logo.src} />
            </div>
            <div className='item'>
              <img src={alpine_logo.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials