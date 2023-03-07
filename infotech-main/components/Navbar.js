import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import logo from '../public/logo_cropped.png'
import toggle from '../public/icons/toggle.png'

const Navbar = (props) => {
  const {menu, setmenu} = props;
  const [full, setfull] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const toggleMenu = () => {
    setmenu(!menu)
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if(scrollPosition > 38) {
      setfull(false)
    }
    if(scrollPosition < 37.9) {
      setfull(true)
    }
  }, [scrollPosition]);

  return (
      <nav id="home">
        {full && <div className='desktop full'>
          {/* <div className='logo'>
            <img src={logo.src} />
          </div> */}
          <ul>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>}

        {!full && <div className='desktop floating'>
          <div className='toggle' onClick={() => toggleMenu()}>
            <img src={toggle.src} />
          </div>
          {menu && <ul className='menu'>
            <li><Link href="#home">HOME</Link></li>
            <li><Link href="#services">SERVICES</Link></li>
            <li><Link href="#about">ABOUT</Link></li>
            <li><Link href="#testimonials">TESTIMONIALS</Link></li>
            <li><Link href="#contact">CONTACT</Link></li>
          </ul>}
        </div>}

        <div id='mobile'>
          <div className='logo'>
            <img src={logo.src} />
          </div>
          <div className='floating'>
            <div className='toggle' onClick={() => toggleMenu()}>
              <img src={toggle.src} />
            </div>
            {menu && <ul className='menu'>
            <li><Link href="#home">HOME</Link></li>
              <li><Link href="#services">SERVICES</Link></li>
              <li><Link href="#about">ABOUT</Link></li>
              <li><Link href="#testimonials">TESTIMONIALS</Link></li>
              <li><Link href="#contact">CONTACT</Link></li>
            </ul>}
          </div>
        </div>
      </nav>
  )
}

export default Navbar