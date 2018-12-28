import React, { Component } from 'react'
import axios from 'axios'

class Test extends Component {
  componentDidMount() {
    axios.get('/hello', res => console.log('I am here', res))
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        <form method="POST" name="test" data-netlify="true">
          <label for="name">
            <span>Name</span>
            <input type="text" name="name" />
          </label>
          <label for="email">
            <span>Email</span>
            <input type="text" name="email" />
          </label>
          <label for="message">
            <span>Message</span>
            <input type="text" name="message" />
          </label>
          <div data-netlify-recaptcha="true" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Test
