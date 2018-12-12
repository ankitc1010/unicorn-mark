import React, { Component } from 'react'
import styled from 'styled-components'

import image from '../assets/img/website.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Wrapper, Page, Card } from '../components/styled/PageRelated'

const WebsitePage = () => (
  <Wrapper>
    <Nav />
    <Page>
      <div className="main">
        <h1>Bots and E-commerce Platform</h1>
        <p>
          Bots and E-commerce Platform provides automation and optimization
          technology to seamlessly integrate business operations for efficiency.
        </p>
        <img src={image} />
        <p>
          The bots and the platform provide businesses the technology required
          to immediately implement metrics-driven business operations and unlock
          efficiency.
        </p>
        <p>
          <ol>
            <li>E-commerce Platform</li>
            <li>Process Automation Bots</li>
          </ol>
        </p>
      </div>
      <div className="side">
        <Card>
          <h2> Read More</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Bots in Business (Coming Soon)</p>
                <p>High impact automation areas</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>E-commerce platform optimization (Coming Soon)</p>
                <p>Integrating sales and marketing best practices</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2> Past Work</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Sales Automation Bots </p>
                <p>An e-commerce startup</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>E-commerce platform for food businesses</p>
                <p> A cloud kitchen startup</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Page>
    <Footer />
  </Wrapper>
)

export default WebsitePage
