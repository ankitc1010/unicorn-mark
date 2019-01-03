import React, { Component } from 'react'
import styled from 'styled-components'

import springboard from './img/logo_spring.png'
import unicornmark from './img/logo.png'
import background from './img/background.png'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  font-family: 'Lato', sans-serif;
  font-size: 4rem;
  form {
    background: #faf5f3;
    margin: 0 auto;
    width: 50%;

    z-index: 10;
    padding: 60px 60px 80px;

    opacity: 0.95;
    text-align: center;
    @media (max-width: 600px) {
      width: 100%;
      input {
        width: 95%;
      }
    }

    h2 {
      text-transform: uppercase;
      text-align: center;
      font-size: 18px;
      color: darken(#4e3332, 10%);
      letter-spacing: 0.061em;
      margin-top: 60px;
      margin-bottom: 20px;
    }

    input {
      width: 80%;
      background: #fff;
      text-align: center;
      margin-bottom: 25px;
      box-shadow: none;
      appearance: none;
      border: none;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #faf5f3;
      padding-top: 8px;
      padding-bottom: 8px;
      font-size: 11px;
      position: relative;
      z-index: 500;
      letter-spacing: 0.06em;
      @media (max-width: 600px) {
        width: 95%;
      }
      &:focus {
        border: 1px solid #faf5f3;
        outline: none;
        appearance: none;
      }
    }

    .submit {
      padding-top: 12px;
      padding-bottom: 12px;
      border: none;
      text-transform: uppercase;
      font-size: 11px;
      position: relative;
      z-index: 500;
      letter-spacing: 0.06em;
      text-align: center;
      cursor: pointer;
      background: #ec7242;
      color: #fff;
      width: 101%;
      transition: 0.8s all ease;
      &:hover {
        background: #d6673c;
        transform: translateY(1px);
        transition: 0.4s all ease;
      }
    }
  }
  #firstname {
    margin-top: 20px;
  }
`

class SpringBoard extends Component {
  render() {
    return (
      <Wrapper>
        <form
          className="sub-form"
          name="spring-board-registration"
          method="post"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="form-name"
            value="spring-board-registration"
          />
          <div className="input-contain">
            <img src={unicornmark} width="140" />
            <br />
            <img src={springboard} width="140" />
            <h2 className="info">Registration Form</h2>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="full name"
              required
              maxlength="100"
            />
            <input
              type="text"
              id="startupname"
              name="startupname"
              placeholder="Startup Name"
              required
              maxlength="100"
            />
            <input
              type="text"
              placeholder="Business Type"
              name="businesstype"
              required="required"
            />
            <input
              type="text"
              id="natureofofferings"
              name="natureofofferings"
              placeholder="Nature of Offerings"
              required
            />
            <input
              type="text"
              id="website"
              name="website"
              placeholder="website adderess"
              required
            />
            <input
              type="text"
              placeholder="phone number"
              name="phone"
              required="required"
            />
            <input
              type="email"
              placeholder="email address"
              name="email"
              required="required"
            />
            <input
              type="text"
              placeholder="Any Specific Queries/Suggestions for the Event"
              name="suggestion"
            />
            <div className="allsub">
              <button className="submit">Contact Us Today</button>
              <div className="submit-under" />
            </div>
          </div>
        </form>
      </Wrapper>
    )
  }
}

export default SpringBoard
