import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Heading = styled.h1`
  font-size: 6rem;
  @media (max-width: 500px) {
    font-size: 4rem;
  }
`

const Label = styled.p`
  > span {
    font-size: 4rem;
    font-weight: bold;
    display: block;
    @media (max-width: 500px) {
      font-size: 3rem;
      margin-bottom: 1rem;
      line-height: 1;
    }
  }
  margin-bottom: 2rem;

  textarea,
  input {
    width: 80%;
    padding: 1rem;
    font-size: 3rem;
    border-radius: 4px;
    border: 2px solid #777777;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      font-size: 2rem;
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`

const Button = styled.div`
  > button {
    position: relative;
    display: inline-block;
    padding: 1rem 3rem;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    font-size: 4rem;
    color: white;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
  }
`

class Test extends Component {
  state = {
    questions: false,
  }
  render() {
    const { questions } = this.state
    return (
      <div style={{ padding: '1rem' }}>
        <Heading>Registration Form</Heading>
        <form name="another-test" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="another-test" />
          <Label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              required
            />
          </Label>

          <Label>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your email"
              required
            />
          </Label>
          <Label>
            <span>Password:</span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password"
              required
            />
          </Label>
          <Label>
            <span>Mobile:</span>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="your phone"
              required
            />
          </Label>
          <Label>
            <span>WhatsApp (if different):</span>
            <input
              type="number"
              name="whatsapp"
              id="whatsapp"
              placeholder="your whatsapp number"
            />
          </Label>
          <Label>
            <span>Place of residence in Bangalore:</span>
            <input
              type="text"
              name="residence"
              id="residence"
              placeholder="your address"
              required
            />
          </Label>
          <Label>
            <span>Any backs in labs:</span>
            <input
              type="text"
              name="backs"
              id="backs"
              placeholder="List out backs if any"
            />
          </Label>
          <Label>
            <span>Any existing projects which are online:</span>
            <textarea
              type="text"
              name="online"
              id="online"
              placeholder="Provide links"
            />
          </Label>
          <Label>
            <span>Any existing projects which are not online:</span>
            <textarea
              type="text"
              name="offline"
              id="offline"
              placeholder="Describe them and you will required to give the demo when giving the interview"
            />
          </Label>

          <Label>
            <span>List out technical proficiencies:</span>
            <textarea
              type="text"
              name="technical"
              id="techinal"
              placeholder="If you have put up some extra efforts somewhere and have no demonstrable projects to share explain what all you learnt. For example- Did 'x' course from 'y' platform. Did 'z' internship somewhere. "
              required
            />
          </Label>
          <Label>
            <span>Knowledge:</span>
            <textarea
              type="text"
              name="technical"
              id="technical"
              placeholder="Highlight what experience you have in Web / Data Science / Digital Marketing"
              required
            />
          </Label>

          <Label>
            <span>Job Role:</span>
            <textarea
              type="text"
              name="technical"
              id="technical"
              placeholder="Specify which job role you will opt for when you are hired by a company"
              required
            />
          </Label>

          <Button>
            <button>Submit</button>
          </Button>
        </form>
      </div>
    )
  }
}

export default Test
