import React, { Component } from 'react'
import axios from 'axios'

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <form name="contact" method="post" data-netlify="true">
          <input type="text" name="name" id="name" placeholder="your name" />
          <input type="text" name="email" id="email" placeholder="your email" />
          <input
            type="text"
            name="message"
            id="message"
            placeholder="your message"
          />

          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Test
