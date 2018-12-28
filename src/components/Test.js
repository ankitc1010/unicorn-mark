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
        <form name="contact" method="post" data-netlify="true">
          <input type="text" name="name" placeholder="your name" />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Test
