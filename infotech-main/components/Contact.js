import React, { useEffect, useState } from 'react'
import axios from 'axios'
import budget from '../public/icons/budget.png'
import phone from '../public/icons/phone.png'
import email from '../public/icons/email.png'
import twitter from '../public/icons/twitter.png'
import instagram from '../public/icons/instagram.png'
import whatsapp from '../public/icons/whatsapp.png'
import linkedin from '../public/icons/linkedin.png'

const Contact = () => {

  const [web, setweb] = useState(true)
  const [mob, setmob] = useState(false)
  const [ui, setui] = useState(false)
  const [gra, setgra] = useState(false)
  const [soft, setsoft] = useState(false)

  const [fields, setfields] = useState({
    name: "",
    email: "",
    phone: "",
    budget: 5000,
    services: []
  })

  const [error, seterror] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    services: ""
  })

  const handleChange = (e) => {
    let {name, value} = e.target
    setfields({...fields, [name]: value})
  }

  const submit = (e) => {
    e.preventDefault()

    var serviceErr = ""
    var nameErr = ""
    var emailErr = ""
    var phoneErr = ""
    var budgetErr = ""

    // Services Validation
    if(fields.services.length == 0) {
      serviceErr = "Minimum 1 Service Required!"
    }
    else {
      serviceErr = ""
    }

    // Name Validation
    if(fields.name.length > 30) {
      nameErr = "Should be less than 30 Characters"
    }
    else if(!(/^[a-zA-Z ]{2,30}$/.test(fields.name))) {
      nameErr = "Invalid Name"
    }
    else {
      nameErr = ""
    }

    // Email Validation
    if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fields.email.toLowerCase()))) {
      emailErr = "Invalid Email"
    }
    else {
      emailErr = ""
    }

    // Phone Validation
    if(phone!="" && !(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(fields.phone.toLowerCase()))) {
      phoneErr = "Invalid Mobile Number"
    }
    else {
      phoneErr = ""
    }

    // Budget Validation
    if(fields.budget % 500 != 0) {
      budgetErr = "Must be a multiple of 500"
    }
    else if(fields.budget < 5000) {
      budgetErr = "Must be atleast 5000"
    }
    else {
      phoneErr = ""
    }

    seterror({
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
      budget: budgetErr,
      services: serviceErr
    })

    if(!nameErr && !emailErr && !phoneErr && !serviceErr && !budgetErr) {
      axios.post("/form", fields)
      .then((response) => {
        alert(response.data.message)
        setfields({
          name: "",
          email: "",
          phone: "",
          budget: 5000,
          services: []
        })
      })
      .catch(err => {
        alert(response.data.message)
      })
    }

  }

  useEffect(() => {
    var services = []
    web ? services.push("web") : services.filter(item => item != "web")
    gra ? services.push("gra") : services.filter(item => item != "gra")
    mob ? services.push("mob") : services.filter(item => item != "mob")
    ui ? services.push("ui") : services.filter(item => item != "ui")
    soft ? services.push("soft") : services.filter(item => item != "soft")
    setfields({...fields, services: services})
  }, [web, gra,mob,soft,ui])

  return (
    <div id='contact'>
      <h1>Now its your time to say hi</h1>
      <form>
        <div className='field'>
          <label>Name <span className="mandatory">*</span><span>{error.name}</span></label>
          <input onChange={handleChange} name="name" value={fields.name} placeholder='Enter Your Name' />
        </div>
        <div className='field'>
          <label>Phone <span>{error.phone}</span></label>
          <input onChange={handleChange} placeholder="Enter Your Phone" name="phone" value={fields.phone} id="phone" />
          <img src={phone.src} className="abs" />
        </div>
        <div className='field'>
          <label>Email <span className="mandatory">*</span><span>{error.email}</span></label>
          <input onChange={handleChange} placeholder="Enter Your Email" name="email" value={fields.email} id="email" type="email" />
          <img src={email.src} className="abs" />
        </div>
        <div className='field'>
          <label>Budget (INR) <span className="mandatory">*</span> <span>{error.budget}</span></label>
          <input onChange={handleChange} name="budget" min={"5000"} step={"500"} value={fields.budget} id="budget" type="number" />
          <img src={budget.src} className="abs" />
        </div>
        <div className='field full'>
          <label>Services <span className="mandatory">*</span><span>{error.services}</span></label>
          <div className='service'>
            <span onClick={() => setweb(!web)} className={web ? "active" : "normal"}>Web development</span>
            <span onClick={() => setmob(!mob)} className={mob ? "active" : "normal"}>UI/UX Design</span>
            <span onClick={() => setsoft(!soft)} className={soft ? "active" : "normal"}>Graphic Design</span>
            <span onClick={() => setui(!ui) }className={ui ? "active" : "normal"}>Mobile App Development</span>
            <span onClick={() => setgra(!gra)} className={gra ? "active" : "normal"}>Custom Software Development</span>
          </div>
        </div>
        <div className='submitbutton'>
          <button onClick={(e) => submit(e)} id="submitButton">Send</button>
        </div>
      </form>
      <ul className='icons'>
        <li><a href="https://instagram.com/writespaceinfotech"><img src={instagram.src} /></a></li>
        <li><a href="https://www.linkedin.com/showcase/writespace-infotech"><img src={linkedin.src} /></a></li>
        {/* <li><a href=""><img src={whatsapp.src} /></a></li>
        <li><a href=""><img src={twitter.src} /></a></li> */}
      </ul>
    </div>
  )
}

export default Contact