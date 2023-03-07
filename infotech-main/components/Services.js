import React, {useState} from 'react'

const Services = () => {

  const [currOpen, setCurrOpen] = useState(1)
  const items = [1, 2, 3, 4, 5, 6]

  const handleClick = (index) => {
    setCurrOpen(items[(index-1)%6])
  }

  return (
    <div id="services">
      <h1>
        <span>01/</span><span>SERVICES</span>
      </h1>
      <h2>
        Providing Web Services
      </h2>
      <div className='cards'>
        <div className='card' onClick={() => handleClick(1)}>
          {currOpen!==1 && <div className='close'>
            <h2>01</h2>
            <p>Web &amp; Mobile App Development</p>
          </div>}
          {currOpen==1 && <div className='open'>
            <h2>01.<span>Web &amp; Mobile App Development</span></h2>
            <p>
              We provide best-in-class Websites and Mobile applications. With the world movie to a digital age, adopting to go online could multiply your revenue and take your business to the next level. We create Applications in a way to get the most customer engagement, you can increase your revenue and gain more business from them.
            </p>
          </div>}
        </div>
        <div className='card' onClick={() => handleClick(2)}>
          {currOpen!==2 && <div className='close'>
            <h2>02</h2>
            <p>Custom Software Development</p>
          </div>}
          {currOpen==2 && <div className='open'>
            <h2>02.<span>Custom Software Development</span></h2>
            <p>Custom digital experiences are pivotal to today’s dynamic and new-age businesses to build a better future ahead. We are designing, developing, measuring, and improving next-gen solutions across a range of industry verticals.</p>
          </div>}
        </div>
        <div className='card' onClick={() => handleClick(3)}>
          {currOpen!==3 && <div className='close'>
            <h2>03</h2>
            <p>UI/UX Design</p>
          </div>}
          {currOpen==3 && <div className='open'>
            <h2>03.<span>UI/UX Design</span></h2>
            <p>
              The exact aesthetic we choose is the basic, &ldquo;rules&rdquo; or the need to conform to user expectations, We want our interface designs to stand out and be memorable. With a unique blend of modern technologies and innovative approaches, we create responsive with uniform cross-platform compatibility. 
            </p>
          </div>}
        </div>
        <div className='card' onClick={() => handleClick(4)}>
          {currOpen!==4 && <div className='close'>
            <h2>04</h2>
            <p>Graphic Design</p>
          </div>}
          {currOpen==4 && <div className='open'>
            <h2>04.<span>Graphic Design</span></h2>
            <p>
              Graphic design plays a very crucial role in this competitive market as a tool for communication. An impressive graphic design is a perfect combination of texts and pictures to explain your business ideas through different mediums.
            </p>
          </div>}
        </div>
        <div className='card' onClick={() => handleClick(5)}>
          {currOpen!==5 && <div className='close'>
            <h2>05</h2>
            <p>Branding &amp; Marketing</p>
          </div>}
          {currOpen==5 && <div className='open'>
            <h2>05.<span>Branding &amp; Marketing</span></h2>
            <p>
              Want to build a Brand you always dreamt of? If yes then you&apos;ve come to the right place. We provide best-in-class marketing and expressive branding support for your brand! Because that&apos;s all the business is about! 
            </p>
          </div>}
        </div>
        <div className='card' onClick={() => handleClick(6)}>
          {currOpen!==6 && <div className='close'>
            <h2>06</h2>
            <p>Other IT Consultancy Services</p>
          </div>}
          {currOpen==6 && <div className='open'>
            <h2>06.<span>Other IT Consultancy Services</span></h2>
            <p>
              We don&apos;t want to abandon you after we&apos;ve done business with you. Providing all-around services for your products is our promise. Services like:- 
              • Application Management Services
              • SEO 
              • Legal Registrations 
              • IOT Based Products
              and a lot more...
              Just get in touch with us and we&apos;ll solve all your queries ASAP! 
            </p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Services