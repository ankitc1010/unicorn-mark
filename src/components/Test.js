import React, { Component } from 'react'
import axios from 'axios'

class Test extends Component {
  state = {
    questions: false,
  }
  render() {
    const { questions } = this.state
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

          <span
            onClick={() =>
              this.setState({
                questions: true,
              })
            }
          >
            Next
          </span>
          <p
            style={{
              visibility: questions ? 'visible' : 'hidden',
            }}
          >
            <input type="text" name="bonus" placeholder="cool" />
            <input
              type="text"
              name="message"
              id="message"
              placeholder="message"
            />
            <p>
              <button>Submit</button>
            </p>
          </p>
        </form>
      </div>
    )
  }
}

export default Test
