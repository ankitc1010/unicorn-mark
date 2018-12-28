import React, { Component } from 'react'
import axios from 'axios'

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <form name="new-test" method="post" data-netlify="true">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="your name"
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="your email"
            required
          />
          <input
            type="text"
            name="message"
            id="message"
            placeholder="message"
          />

          <p>
            <button>Submit</button>
          </p>
        </form>
      </div>
    )
  }
}

export default Test
