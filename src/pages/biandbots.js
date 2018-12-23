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
          Business Intelligence & Process Automation customised upon your
          existing system to automate processes and enhance overall efficiency
          with respect to time, human efforts; transforming data into actionable
          information and dashboard.
        </p>
        <img src={image} />
        <p>
          Developing an overall understanding of the ongoing physical frameworks
          to construct the architecture and deploy custom software while
          transforming data into a business asset to achieve overall efficiency
          and upgrade across all the processes.
        </p>
        <p>We provide solutions as:</p>
        <p>
          <ol>
            <li>Websites</li>
            <li>Windows/OSX/Linux based softwares</li>
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
