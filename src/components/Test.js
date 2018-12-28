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
        <form method="post" name="test" data-netlify="true">
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
          <h1>cool</h1>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Test
