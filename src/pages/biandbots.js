import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import image from '../assets/img/website.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Wrapper, Page, Card } from '../components/styled/PageRelated'
import { ContactButton, SeeSite } from '../components/Contact'

const WebsitePage = () => (
  <Wrapper>
    <Nav />
    <Helmet
      title="Business Intelligence & Bot Based Process Automation"
      meta={[
        {
          name: 'description',
          content:
            'BI Tools and Bots provide automation and optimization technology to seamlessly integrate business operations for efficiency',
        },
        {
          name: 'keywords',
          content:
            'marketing, strategy consulting, consulting, web development, development, branding, machine learning, pocs',
        },
      ]}
    />
    <Page>
      <div className="main">
        <h1>Business Intelligence & Bot Based Process Automation</h1>
        <p>
          BI Tools and Bots provide automation and optimization technology to
          seamlessly integrate business operations for efficiency.
        </p>
        <img src={image} />
        <p>
          The bots and the business intelligence tools provide businesses the
          technology required to immediately implement metrics-driven business
          operations and unlock efficiency.
        </p>
        <p>
          <ol>
            <li>Business Intelligence Tools</li>
            <li>Process Automation Bots</li>
          </ol>
        </p>
        <p>
          <ContactButton />
        </p>
      </div>
      <div className="side">
        <Card>
          <h2>Read More</h2>
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
                <p>Sample Analytics Dashboard </p>
                <p>Integrating sales and marketing best practices</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2>Past Work</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Schools Analytics Platform </p>
                <p>A demo of the analytics platform.</p>
                <p>
                  <SeeSite link="https://unicorn-mark-dashboard.herokuapp.com" />
                </p>
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
