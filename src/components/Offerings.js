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
              <a>Investment Branding</a>
            </Link>
            <Link to="/machinelearning">
              <a>Machine Learning POCs</a>
            </Link>
            <Link to="/marketing">
              <a>Digital Content Marketing</a>
            </Link>
            <Link to="/research">
              <a>Product and Customer Research</a>
            </Link>
            <Link to="/biandbots">
              <a>Business Intelligence and Process Automation Tools</a>
            </Link>
          </div>
        )}
      </a>
    )
  }
}

export default enhanceWithClickOutside(Offerings)
