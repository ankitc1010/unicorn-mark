import React, { Component } from 'react'
import axios from 'axios'

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-capture"
        >
          <p>
            <input type="text" name="name" id="name" placeholder="your name" />
          </p>
          <p>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="your email"
            />
          </p>

          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    )
  }
}

export default Test
