import React, { Component } from 'react'
import styled from 'styled-components'

import image from '../assets/img/machinelearning.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Page, Card } from '../components/styled/PageRelated'

const WebsitePage = () => (
  <div>
    <Nav />
    <Page>
      <div className="main">
        <h1>Proof of Concept Development - Machine Learning Applications</h1>
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
            <li>
              Organization Audit for AI Readiness - eg. Data science
              infrastructure selection
            </li>
            <li>
              Customer Convenience AI - eg. Product and Vendor Recommendation
              Systems
            </li>
            <li>
              Customer Interaction AI - eg. Sales Automation and Support Systems
            </li>
            <li>
              Business Intelligence AI - eg. Sales Target Prioritization Systems
            </li>
            <li>
              Internal Process Optimization AI - Inventory Monitoring Systems
            </li>
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
  </div>
)

export default WebsitePage
