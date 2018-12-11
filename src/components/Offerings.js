import React, { Component } from 'react'
import { Link } from 'gatsby'

class Offerings extends Component {
  state = {
    show: false,
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
        onMouseLeave={() => {
          this.setState({
            show: false,
          })
        }}
      >
        Offerings
        {show && (
          <div>
            <a>Investment Branding and Strategy</a>
            <a>Proof of Concept Development - Machine Learning Applications</a>
            <a>Digital Branding and Content Marketing</a>
            <a>Product and Customer Research</a>
            <a>Custom E-Commerce Platform</a>
          </div>
        )}
      </a>
    )
  }
}

export default Offerings
