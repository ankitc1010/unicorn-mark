import React from 'react'

import logo from '../assets/img/logo.png'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
const ThankyouPage = () => (
  <div>
    <Nav />
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            <img src={logo} />
          </span>
          <span className="heading-primary--sub">
            Thankyou for your submission, you will be mailed for further
            instructions.
          </span>
        </h1>
      </div>
    </header>
    <Footer />
  </div>
)

export default ThankyouPage
