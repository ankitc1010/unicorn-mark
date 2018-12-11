import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import { Link } from 'gatsby'

class Offerings extends Component {
  state = {
    show: false,
  }

  handleClickOutside = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    const { show } = this.state
    return (
      <a
        onMouseEnter={() =>
          this.setState({
            show: true,
          })
        }
      >
        Offerings
        {show && (
          <div>
            <Link to="/investment">
              <a>Investment Branding and Strategy</a>
            </Link>
            <Link to="/machinelearning">
              <a>
                Proof of Concept Development - Machine Learning Applications
              </a>
            </Link>
            <Link to="/branding">
              <a>Digital Branding and Content Marketing</a>
            </Link>
            <Link to="/research">
              <a>Product and Customer Research</a>
            </Link>
            <Link to="/website">
              <a>Custom E-Commerce Platform</a>
            </Link>
          </div>
        )}
      </a>
    )
  }
}

export default enhanceWithClickOutside(Offerings)
