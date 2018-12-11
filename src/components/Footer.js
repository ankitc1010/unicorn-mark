import React from 'react'

import logo from '../assets/img/logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <picture className="footer__logo">
        <img alt="Full logo" src={logo} width="200" />
      </picture>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Carrers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          Built by{' '}
          <a href="#" className="footer__link">
            UnicornMark
          </a>{' '}
          for his online course . Copyright &copy; by Unicorn Mark.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
