import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Offerings from './Offerings'

import logo from '../assets/img/logo.png'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 2rem;
  font-family: 'Nunito', sans-serif;
  border-top: 2px solid black;
  .logo {
    float: left;
  }
  .rest {
    display: flex;
    align-items: end;
    justify-content: flex-end;
  }
  svg {
    margin-right: 0.5rem;
  }
  a,
  button {
    padding: 1rem 3rem !important;
    display: flex;
    position: relative;
    font-family: inherit;
    align-items: center;
    justify-content: right;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    text-decoration: none;
    color: #204356;
    > a {
      padding: 0 !important;
    }

    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    > div {
      position: absolute;
      top: 6rem;
      left: 0px;
      background: white;
      z-index: 9999;
      width: 600px;
      -webkit-box-shadow: 1px 2px 5px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 2px 5px -2px rgba(0, 0, 0, 0.75);
      box-shadow: 1px 2px 5px -2px rgba(0, 0, 0, 0.75);
    }
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.primaryColor};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      background: #204356;
      color: white;
      outline: none;
      > a {
        color: white;
      }
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    display: none;
  }
`

class Header extends Component {
  state = {
    selected: false,
  }
  toggle = () => {
    this.setState(({ selected }) => ({ selected: !selected }))
  }
  render() {
    const { selected } = this.state
    const { home } = this.props
    return (
      <>
        <NavStyles>
          <div className="logo" />
          <div className="rest">
            {!home && <Link to="/">Home</Link>}
            <Offerings />
            {home && (
              <>
                <a href="/#section-features">Team</a>
                <a href="#clients">Clients</a>
              </>
            )}

            <Link to="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </NavStyles>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            checked={selected}
          />

          <label
            for="navi-toggle"
            className="navigation__button"
            onClick={this.toggle}
          >
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>01</span>
                  Home
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/contact" className="navigation__link">
                  <span>02</span>
                  Contact
                </Link>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>03</span>
                  <Offerings />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}
export default Header
