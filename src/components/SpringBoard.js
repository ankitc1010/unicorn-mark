import React, { Component } from 'react'
import styled from 'styled-components'

import springboard from './img/logo_spring.png'
import unicornmark from './img/logo.png'

const Wrapper = styled.div`
  width: 94vw;
  height: 94vh;
  margin: 0;
  padding: 0;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/form-bk.jpg')
    no-repeat center center;
  background-size: cover;
  font-family: 'Lato', sans-serif;
  form {
    background: #faf5f3;
    width: 50%;
    margin-top: 50px;
    margin-bottom: 50px;
    position: absolute;
    z-index: 10;
    padding: 60px 60px 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.85;
    text-align: center;
    @media (max-width: 600px) {
      width: 100%;
    }

    h2 {
      text-transform: uppercase;
      text-align: center;
      font-size: 18px;
      color: darken(#4e3332, 10%);
      letter-spacing: 0.061em;
      margin-top: 60px;
      margin-bottom: 20px;
      &.success {
        color: #356e64;
        margin-top: -40px;
        margin-bottom: 0px;
        padding: 0;
      }
    }
    p.success-dialog {
      margin-top: -150px;
      color: #356e64;
      letter-spacing: 0.02em;
      text-align: center;
      line-height: 1.8em;
      text-transform: uppercase;
      a {
        color: #9d775f;
        text-decoration: none;
        transition: 0.8s all ease;
        &:hover {
          color: #c08159;
          transition: 0.4s all ease;
        }
      }
    }
    input {
      width: 100%;
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
      text-transform: uppercase;
      font-size: 11px;
      position: relative;
      z-index: 500;
      letter-spacing: 0.06em;
      &:focus {
        border: 1px solid #faf5f3;
        outline: none;
        appearance: none;
      }
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
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

  .circle {
    padding: 15px;
    height: 25px;
    width: 25px;
    margin-top: -80px;
    margin-left: 115px;
    position: absolute;
    z-index: 20;
    border-radius: 50%;
    clear: both;
    opacity: 0.8;
  }

  .circle-quill {
    border: 1px solid #faf5f3;
    background: #fff;
  }

  .circle-paper {
    border: 1px solid $green-lt;
    background: $green-dk;
  }

  .submit-under,
  .loader,
  .loader2,
  .circle-paper,
  p.success-dialog,
  h2.success {
    visibility: hidden;
  }

  .submit-under {
    background: #8c6e7a;
    width: 291px;
    height: 45px;
    margin-top: -40px;
    margin-left: -4px;
    position: absolute;
    z-index: -1;
  }

  .loader,
  .loader2 {
    position: absolute;
    z-index: -5;
    margin-top: -45px;
    margin-left: 114px;
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
