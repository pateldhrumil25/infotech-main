import React, {useState} from 'react'
import leftcenter from '../public/images/leftcenter.png'
import rightcenter from '../public/images/rightcenter.png'
import topcenter from '../public/images/topcenter.png'
import bottomcenter from '../public/images/bottomcenter.png'
import ip from '../public/images/rp.png'
import rh from '../public/images/rh.jpg'
import ds from '../public/images/dp.png'
import ps from '../public/images/ps.png'
import rc from '../public/images/rc.png'
import linkedin from '../public/icons/linkedin.png'

const Team = () => {

  return (
    <div id="about">
      <div className='left'>
        <h1>
          <span>02/</span><span>ABOUT</span>
        </h1>
        <h2>
          Team of Creatives
        </h2>
        <p>
          The brains and the creators behind this company! A determined and creative group of youngsters take the centre stage. Their technical knowledge and expertise are not to be undermined by their age!
        </p>
      </div>
      <div className='right'>
        <div className='image'>
          <img src={ps.src} />
          <div className="details">
              <div className="left">
                  <h1>Parshva Shah</h1>
                  <h3>C.M.O</h3>
              </div>
              <a href="https://www.linkedin.com/in/parshva-shah-402940177/"><img src={linkedin.src} /></a>

          </div>
        </div>
          <div className='image arrow'>
              <img src={topcenter.src} />
          </div>
        <div className='image'>
          <img src={ip.src} />
          <div className="details">
            <div className="left">
                <h1>Ishan Patel</h1>
                <h3>C.O.O</h3>
            </div>
            <a href="https://www.linkedin.com/in/ishan-patel-82b831242/"><img src={linkedin.src} /></a>
          </div>
        </div>
        <div className='image arrow'>
          <img src={leftcenter.src} />
        </div>
        <div className='image'>
          <img src={rh.src} />
          <div className="details">
            <div className="left">
                <h1>Rohan Hadvani</h1>
                <h3>Founder, CEO</h3>
            </div>
            <a href="https://www.linkedin.com/in/rohan-hadvani-aa159b153"><img src={linkedin.src} /></a>
          </div>
        </div>
        <div className='image arrow'>
          <img src={rightcenter.src} />
        </div>
        <div className='image'>
          <img src={ds.src} />
          <div className="details">
            <div className="left">
                <h1>Dhrumil Patel</h1>
                <h3> Software Developer</h3>
            </div>
            <a href="https://www.linkedin.com/in/dhrumil-patel-1b804a179/"><img src={linkedin.src} /></a>
          </div>
        </div>
          <div className='image arrow'>
              <img src={bottomcenter.src} />
          </div>
        <div className='image'>
          <img src={rc.src} />
          <div className="details">
              <div className="left">
                  <h1>Rishi Chokshi</h1>
                  <h3>Mobile App Developer</h3>
              </div>
              <a href="https://www.linkedin.com/in/rishi-chokshi-779a891bb/"><img src={linkedin.src} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team