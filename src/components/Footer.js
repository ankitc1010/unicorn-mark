import React from 'react'

import logo from '../assets/img/logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box" />
    <div className="footer__logo-box">
      <picture className="footer__logo">
        <img alt="Full logo" src={logo} width="200" />
      </picture>
    </div>

    <p className="footer__copyright">Copyright &copy; by Unicorn Mark.</p>
  </footer>
)

export default Footer
