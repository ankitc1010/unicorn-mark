import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import image from '../assets/img/machinelearning.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Wrapper, Page, Card } from '../components/styled/PageRelated'
import { ContactButton } from '../components/Contact'

const WebsitePage = () => (
  <Wrapper>
    <Nav />
    <Helmet
      title="Proof of Concept Development - Machine Learning Applications"
      meta={[
        {
          name: 'description',
          content:
            ' Machine Learning Proof-of-Concepts are custom-built prototype applications which demonstrate and measure the scope of automation and AI for your business',
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
        <h1>Machine Learning POCs</h1>
        <p>
          Machine Learning Proof-of-Concepts are custom-built prototype
          applications which demonstrate and measure the scope of automation and
          AI for your business
        </p>
        <img src={image} />
        <p>
          These prototypes help prioritize investments in AI and Machine
          Learning for companies based on a clear ROI with demonstrable
          applications.
        </p>
        <p>
          <ol>
            <li>Organization Audit for AI Readiness</li>
            <li>Customer Convenience AI</li>
            <li>Customer Interaction AI</li>
            <li>Business Intelligence AI</li>
            <li>Internal Process Optimization AI</li>
          </ol>
        </p>
        <p>
          <ContactButton />
        </p>
      </div>
      <div className="side">
        <Card>
          <h2> Read More</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Patient Health Monitoring</p>
                <p>A healthcare AI startup</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Business Intelligence Dashboard</p>
                <p>A healthcare devices startup</p>
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
                <p>Identify and Prioritize AI Impact (Coming Soon)</p>
                <p>Building an AI roadmap for your business</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>
                  Building an AI roadmap for your business Top Areas for AI
                  Impact (Coming Soon)
                </p>
                <p>Customer-facing AI vs AI for Business Processes</p>
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
