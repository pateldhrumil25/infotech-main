import React from 'react'
import linesVector from '../public/images/linesVector.png'
import headerImage from '../public/images/header-image.png'
import headerGroup from '../public/images/header-group.png'
import logo from '../public/headerlogo.png'
import pen from '../public/icons/pen.png'
import usersFilled from '../public/icons/users-filled.png'
import instagram from '../public/icons/instagram.png'
import linkedin from '../public/icons/linkedin.png'
import whatsapp from '../public/icons/whatsapp.png'

const Header = () => {
  return (
    <header>
      <div className='top'>
        <div className='left'>
          <div className='head'>
            {/* <h2>Let&apos;s Talk <span><img src={linesVector.src} /></span></h2>
            <h1>Design</h1> */}
            <img className='img' src={logo.src} />
          </div>
          <div className='items'>
            <div className='item'>
              <div className='icon'>
                <img src={pen.src} />
              </div>
              <p>Modern Designs</p>
            </div>
            <div className='item'>
              <div className='icon'>
                <img src={usersFilled.src} />
              </div>
              <p>Support to clients</p>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='image'>
            <img className='fg' src={headerImage.src} />
            <img className='bg' src={headerGroup.src} />
          </div>
          <ul className='icons'>
            <li><a href="https://instagram.com/writespaceinfotech"><img src={instagram.src} /></a></li>
            <li><a href="https://www.linkedin.com/showcase/writespace-infotech"><img src={linkedin.src} /></a></li>
            {/* <li><a href=""><img src={whatsapp.src} /></a></li> */}
          </ul>
        </div>
      </div>

      <div className='bottom'>
        <div className='item'>
          <div className='number'>10+</div>
          <p>Projects</p>
        </div>

        <h1>Our Experience</h1>

        <div className='item'>
          <div className='number'>5+</div>
          <p>Clients</p>
        </div>
      </div>
    </header>
  )
}

export default Header