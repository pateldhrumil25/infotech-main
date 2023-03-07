import React, {useState} from 'react'
import leftcenter from '../public/images/leftcenter.png'
import rightcenter from '../public/images/rightcenter.png'
import topcenter from '../public/images/topcenter.png'
import bottomcenter from '../public/images/bottomcenter.png'
import dp from '../public/images/dp.jpeg'
import rp from '../public/images/rp.jpg'
import rh from '../public/images/rh.jpg'
import jj from '../public/images/jj.jpg'
import dm from '../public/images/dm.jpg'
import ds from '../public/images/ds.jpg'
import ps from '../public/images/ps.jpeg'
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
          <img src={dp.src} />
          <div className="details">
              <div className="left">
                  <h1>Devanshi Patel</h1>
                  <h3>Full Stack Developer</h3>
              </div>
              <a href="https://www.linkedin.com/in/devanshi-patel-93a6641ba/"><img src={linkedin.src} /></a>
          </div>
        </div>
        <div className='image'>
          <img src={ds.src} />
          <div className="details">
              <div className="left">
                  <h1>Dhrumil Shah</h1>
                  <h3>Project Head</h3>
              </div>
              <a href="https://www.linkedin.com/in/dhrumil-shah-4106191a0"><img src={linkedin.src} /></a>
          </div>
        </div>
        <div className='image'>
          <img src={rp.src} />
          <div className="details">
            <div className="left">
                <h1>Ruchit Patel</h1>
                <h3>Full Stack Developer</h3>
            </div>
            <a href="https://www.linkedin.com/in/ruchit-patel-a80888159"><img src={linkedin.src} /></a>
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
          <img src={jj.src} />
          <div className="details">
            <div className="left">
                <h1>Janmejay Shastri</h1>
                <h3>Full Stack Developer</h3>
            </div>
            <a href="https://www.linkedin.com/in/janmejay-shastri-7658a7193/"><img src={linkedin.src} /></a>
          </div>
        </div>
        <div className='image'>
          <img src={ps.src} />
          <div className="details">
              <div className="left">
                  <h1>Parshva Shah</h1>
                  <h3>Marketing Head</h3>
              </div>
              <a href="https://www.linkedin.com/in/parshva-shah-402940177/"><img src={linkedin.src} /></a>
          </div>
        </div>
        <div className='image'>
          <img src={dm.src} />
          <div className="details">
              <div className="left">
                  <h1>Divya Mahur</h1>
                  <h3>UI/UX Designer</h3>
              </div>
              <a href="https://www.linkedin.com/in/divya-mahur-91308a1a0/"><img src={linkedin.src} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team