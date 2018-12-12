import React, { Component } from 'react'
import styled from 'styled-components'

import image from '../assets/img/marketing.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Wrapper, Page, Card } from '../components/styled/PageRelated'

const WebsitePage = () => (
  <Wrapper>
    <Nav />
    <Page>
      <div className="main">
        <h1>Digital Branding and Content Marketing</h1>
        <p>
          Digital Content Marketing is a set of social and digital activities
          which ensures sustained relevance in the digital community with
          minimal budgets
        </p>
        <img src={image} />
        <p>
          These activities help maximize returns from digital content marketing
          for companies with demonstrable results.
        </p>
        <p>
          <ol>
            <li>Digital Audit for PC & Mobile</li>
            <li>Digital Spend & Content Analysis</li>
            <li>Digital Channels & Content Pipeline Setup</li>
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
                <p>Digital Presence Auditing for Businesses (Coming Soon)</p>
                <p>Getting all the the basics right</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>
                  Content Analysis of Competitor Communications (Coming Soon)
                </p>
                <p> Campaign Planning with intelligence</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2>Case Studies</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Digital Presence Audit </p>
                <p> An industrial design firm</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Competitor Digital Spend and Content Analysis</p>
                <p>A packaged wheat manufacturer</p>
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
